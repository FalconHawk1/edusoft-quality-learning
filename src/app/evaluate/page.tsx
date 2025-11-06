
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Star } from 'lucide-react';
import { mockApplications } from '@/lib/data';
import type { Application } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

function ApplicationTable({ applications }: { applications: Application[] }) {
  if (applications.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-dashed rounded-lg">
        <h3 className="text-xl font-semibold">No hay aplicaciones registradas</h3>
        <p className="text-muted-foreground mt-2">
          Comienza por registrar una nueva aplicación para evaluarla.
        </p>
      </div>
    );
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Aplicación</TableHead>
            <TableHead>Puntuación Media</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell>
                <div className="font-medium">{app.name}</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {app.description}
                </div>
              </TableCell>
              <TableCell>
                {app.averageScore ? (
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>{app.averageScore.toFixed(1)} / 5.0</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground">Sin evaluar</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Button asChild size="sm">
                  <Link href={`/evaluate/${app.id}`}>Evaluar</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default function EvaluatePage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth-error');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    if (parsedUser.username === 'admin') {
      const allApps = JSON.parse(localStorage.getItem('all_apps') || JSON.stringify(mockApplications));
      setApplications(allApps);
    } else {
      const studentApps = JSON.parse(localStorage.getItem('student_apps') || '[]');
      setApplications(studentApps);
    }
  }, [router]);

  const handleAddApplication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newApp: Application = {
      id: new Date().getTime().toString(),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      url: formData.get('url') as string,
      createdAt: new Date().toISOString(),
      createdBy: user?.username,
    };

    const updatedApps = [...applications, newApp];

    if (user?.username === 'admin') {
        localStorage.setItem('all_apps', JSON.stringify(updatedApps));
    } else {
        localStorage.setItem('student_apps', JSON.stringify(updatedApps));
    }
    
    setApplications(updatedApps);

    setOpen(false);
    toast({
      title: "Aplicación Registrada",
      description: `"${newApp.name}" ha sido añadida con éxito.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold font-headline">Panel de Evaluación</h1>
          <p className="text-muted-foreground mt-2">
            {user?.username === 'admin'
              ? 'Registra y supervisa todas las aplicaciones.'
              : 'Registra y evalúa tus aplicaciones personales.'}
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Registrar Aplicación
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleAddApplication}>
              <DialogHeader>
                <DialogTitle className="font-headline">Registrar Nueva Aplicación</DialogTitle>
                <DialogDescription>
                  Completa los datos de la aplicación que deseas evaluar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nombre
                  </Label>
                  <Input id="name" name="name" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="url" className="text-right">
                    URL
                  </Label>
                  <Input id="url" name="url" type="url" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Descripción
                  </Label>
                  <Textarea id="description" name="description" className="col-span-3" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Guardar Aplicación</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <ApplicationTable applications={applications} />
    </div>
  );
}

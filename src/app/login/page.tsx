
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Logo from '../components/logo';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if ((username === 'admin' && password === 'admin123') || (username === 'estudiante' && password === '12345')) {
      localStorage.setItem('user', JSON.stringify({ username }));
      router.push('/');
    } else {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "¡Registro Exitoso!",
        description: "Tu cuenta ha sido creada (modo demostración)."
    });
    setShowRegister(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="w-full max-w-sm shadow-2xl">
        {!showRegister ? (
          <>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Logo />
              </div>
              <CardTitle className="font-headline text-2xl">Iniciar Sesión</CardTitle>
              <CardDescription>Accede a tu cuenta de EduSoft</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Usuario</Label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin o estudiante"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Button type="submit" className="w-full">
                  Iniciar sesión
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  ¿No tienes cuenta?{' '}
                  <Button variant="link" className="p-0 h-auto" type="button" onClick={() => setShowRegister(true)}>
                    Regístrate
                  </Button>
                </p>
              </CardFooter>
            </form>
          </>
        ) : (
          <>
            <CardHeader className="text-center">
               <div className="mx-auto mb-4">
                <Logo />
              </div>
              <CardTitle className="font-headline text-2xl">Crear una Cuenta</CardTitle>
              <CardDescription>Completa el formulario para registrarte.</CardDescription>
            </CardHeader>
             <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input type="text" id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input type="email" id="email" placeholder="tu@correo.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password-register">Contraseña</Label>
                        <Input type="password" id="password-register" placeholder="••••••••" required />
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                    <Button type="submit" className="w-full">
                    Registrarse
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                    ¿Ya tienes cuenta?{' '}
                    <Button variant="link" className="p-0 h-auto" type="button" onClick={() => setShowRegister(false)}>
                        Inicia Sesión
                    </Button>
                    </p>
              </CardFooter>
            </form>
          </>
        )}
      </Card>
    </div>
  );
}

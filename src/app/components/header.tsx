
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from './logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    // Proteger la ruta /evaluate
    if (pathname === '/evaluate' && !localStorage.getItem('user')) {
      router.push('/auth-error');
    }

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
    // Opcional: mostrar un mensaje de "Sesión cerrada correctamente"
    // Esto podría manejarse en la página de login con un parámetro en la URL
  };

  const navItems = [
    { href: "/learn", label: "Aprende" },
    { href: "/evaluate", label: "Evalúa" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="hidden font-bold sm:inline-block font-headline">
              EduSoft Quality Learning
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center">
              <Logo />
              <span className="font-bold ml-2 font-headline">EduSoft</span>
            </Link>
            <div className="my-4 h-px w-full bg-border" />
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can add search bar here if needed */}
          </div>
          <nav className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Sesión iniciada como: <strong>{user.username}</strong>
                </span>
                <Button onClick={handleLogout} variant="outline">
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <Button onClick={() => router.push('/login')}>Iniciar Sesión</Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}


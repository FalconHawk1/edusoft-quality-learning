
"use client";

import Link from 'next/link';

// Página que se muestra cuando un usuario no autenticado intenta acceder a una ruta protegida.
export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Acceso Denegado</h1>
        <p className="text-gray-700 mb-6">Debes iniciar sesión para acceder al panel de evaluación.</p>
        <Link href="/login" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Ir a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}

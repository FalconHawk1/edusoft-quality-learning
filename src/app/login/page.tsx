
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const router = useRouter();

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
    setRegistrationSuccess(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        {!showRegister ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">Usuario</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
                Iniciar sesión
              </button>
            </form>
            <p className="text-center mt-4">
              ¿No tienes cuenta?{' '}
              <button onClick={() => setShowRegister(true)} className="text-blue-500">
                Registrarse
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Registrarse</h2>
            {registrationSuccess ? (
              <p className="text-green-500 text-center">¡Registro exitoso! (modo demostración)</p>
            ) : (
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" required />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                  <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
                  Registrarse
                </button>
              </form>
            )}
            <p className="text-center mt-4">
              <button onClick={() => { setShowRegister(false); setRegistrationSuccess(false); }} className="text-blue-500">
                Volver a Iniciar Sesión
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

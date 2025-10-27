
"use client";

import { useState, useEffect } from 'react';
import { SpeakerLoudIcon, SpeakerOffIcon, ResetIcon } from '@radix-ui/react-icons';

// Este componente renderiza un botón flotante que abre un menú de opciones de accesibilidad.
// Permite a los usuarios activar el alto contraste, aumentar el tamaño del texto y leer el contenido en voz alta.
export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState(16);

  // Efecto para aplicar y limpiar los estilos de accesibilidad en el cuerpo del documento.
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    document.body.style.fontSize = `${textSize}px`;

    // Limpia los estilos cuando el componente se desmonta.
    return () => {
      document.body.classList.remove('high-contrast');
      document.body.style.fontSize = '16px';
      speechSynthesis.cancel();
    };
  }, [highContrast, textSize]);

  // Alterna el modo de alto contraste.
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  // Aumenta el tamaño del texto en 2 píxeles.
  const increaseTextSize = () => {
    setTextSize(prevSize => prevSize + 2);
  };

  // Lee el contenido de la página en voz alta o detiene la lectura.
  const toggleSpeech = () => {
    if (isReading) {
      speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const content = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.onend = () => setIsReading(false);
      speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  // Restaura la configuración de accesibilidad a los valores predeterminados.
  const resetSettings = () => {
    setHighContrast(false);
    setTextSize(16);
    speechSynthesis.cancel();
    setIsReading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white p-4 rounded-full shadow-lg"
        aria-label="Menú de accesibilidad"
      >
        ♿
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-bold mb-2">Accesibilidad</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={toggleHighContrast} className="flex items-center w-full text-left">
                <span className="mr-2">👁️</span> Alto Contraste
              </button>
            </li>
            <li>
              <button onClick={increaseTextSize} className="flex items-center w-full text-left">
                <span className="mr-2">➕</span> Aumentar Texto
              </button>
            </li>
            <li>
              <button onClick={toggleSpeech} className="flex items-center w-full text-left">
                {isReading ? <SpeakerOffIcon className="mr-2" /> : <SpeakerLoudIcon className="mr-2" />} Leer Contenido
              </button>
            </li>
            <li>
              <button onClick={resetSettings} className="flex items-center w-full text-left">
                <ResetIcon className="mr-2" /> Restaurar
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

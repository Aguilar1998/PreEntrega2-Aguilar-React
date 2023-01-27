import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [texto, setTexto] = useState('');

  const handleKeyDown = (e) => {
    if (
      e.key === 'a' ||
      e.key === 'e' ||
      e.key === 'i' ||
      e.key === 'o' ||
      e.key === 'u'
    ) {
      e.preventDefault();
    } else {
      setTexto(texto);
    }
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
}

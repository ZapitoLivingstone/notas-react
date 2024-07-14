import React, { useState } from 'react';

const Formulario = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (descripcion.trim()) {
      agregarNota({
        titulo,
        descripcion,
        importante,
      });
      setTitulo('');
      setDescripcion('');
      setImportante(false);
    } else {
      alert('La descripción es obligatoria');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <label>
        Importante
        <input
          type="checkbox"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
        />
      </label>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default Formulario;

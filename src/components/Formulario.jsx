
import React, { useState } from 'react';
import { validarTitulo, validarDescripcion, validarNoBasura } from '../components/validaciones';

const Formulario = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);
  const [error, setError] = useState('');

  const handleAgregarNota = (e) => {
    e.preventDefault();
    if (!validarTitulo(titulo)) {
      setError('El título debe tener entre 3 y 50 caracteres alfanuméricos.');
      return;
    }
    if (!validarDescripcion(descripcion)) {
      setError('La descripción debe tener entre 10 y 200 caracteres y puede contener .,!?');
      return;
    }
    if (!validarNoBasura(titulo) || !validarNoBasura(descripcion)) {
      setError('El título o la descripción contienen caracteres repetitivos sin sentido.');
      return;
    }

    const nuevaNota = { titulo, descripcion, importante };
    agregarNota(nuevaNota);
    setTitulo('');
    setDescripcion('');
    setImportante(false);
    setError('');
  };

  return (
    <form onSubmit={handleAgregarNota}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      ></textarea>
      <label>
        Importante
        <input
          type="checkbox"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
        />
      </label>
      <button type="submit">Agregar Nota</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Formulario;

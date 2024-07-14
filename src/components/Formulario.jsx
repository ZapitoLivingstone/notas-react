import React, { useState } from 'react';

const Formulario = ({ agregarNota }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!titulo.trim()) nuevosErrores.titulo = 'El título es obligatorio.';
    if (!descripcion.trim()) nuevosErrores.descripcion = 'La descripción es obligatoria.';
    return nuevosErrores;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
    } else {
      agregarNota({
        titulo,
        descripcion,
        importante,
      });
      setTitulo('');
      setDescripcion('');
      setImportante(false);
      setErrores({});
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
      {errores.titulo && <p style={{ color: 'red' }}>{errores.titulo}</p>}
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}
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

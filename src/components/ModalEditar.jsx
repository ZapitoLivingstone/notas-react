import React, { useState } from 'react';
import { validarTitulo, validarDescripcion, validarNoBasura } from './validaciones';

const ModalEditar = ({ isOpen, onClose, onSave, nota, setNota }) => {
  const [errores, setErrores] = useState({ titulo: '', descripcion: '' });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNota({ ...nota, [name]: value });
  };

  const validarCampos = () => {
    const erroresTemp = { titulo: '', descripcion: '' };

    if (!validarTitulo(nota.titulo)) {
      erroresTemp.titulo = 'Título inválido. Debe tener entre 3 y 50 caracteres y no contener caracteres especiales.';
    }

    if (!validarDescripcion(nota.descripcion)) {
      erroresTemp.descripcion = 'Descripción inválida. Debe tener entre 10 y 500 caracteres.';
    }

    if (!validarNoBasura(nota.titulo) || !validarNoBasura(nota.descripcion)) {
      erroresTemp.titulo = 'El título o la descripción contienen caracteres repetidos o patrones no válidos.';
      erroresTemp.descripcion = 'El título o la descripción contienen caracteres repetidos o patrones no válidos.';
    }

    setErrores(erroresTemp);

    return !erroresTemp.titulo && !erroresTemp.descripcion;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validarCampos()) {
      onSave(nota);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Nota</h2>
        <form onSubmit={handleSave}>
          <input
            type="text"
            name="titulo"
            value={nota.titulo}
            onChange={handleInputChange}
            required
          />
          {errores.titulo && <span className="error">{errores.titulo}</span>}
          <textarea
            name="descripcion"
            value={nota.descripcion}
            onChange={handleInputChange}
            required
          ></textarea>
          {errores.descripcion && <span className="error">{errores.descripcion}</span>}
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditar;

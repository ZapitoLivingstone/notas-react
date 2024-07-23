import React, { useState } from 'react';
import ModalEliminar from './ModalEliminar';
import ModalEditar from './ModalEditar';

const Nota = ({ nota, onDelete, onSave }) => {
  const [isModalEliminarOpen, setModalEliminarOpen] = useState(false);
  const [isModalEditarOpen, setModalEditarOpen] = useState(false);
  const [notaActual, setNotaActual] = useState(nota);

  const openModalEliminar = () => setModalEliminarOpen(true);
  const closeModalEliminar = () => setModalEliminarOpen(false);

  const openModalEditar = () => setModalEditarOpen(true);
  const closeModalEditar = () => setModalEditarOpen(false);

  const confirmDelete = () => {
    onDelete(nota);
    closeModalEliminar();
  };

  const saveChanges = (updatedNota) => {
    onSave(updatedNota);
    closeModalEditar();
  };

  return (
    <div className={`nota ${nota.importante ? 'importante' : ''}`}>
      <button className="delete-button" onClick={(e) => { e.stopPropagation(); openModalEliminar(); }}>
        X
      </button>
      <div onClick={openModalEditar}>
        <h2>{nota.titulo}</h2>
        <p>{nota.descripcion}</p>
      </div>
      <ModalEliminar
        isOpen={isModalEliminarOpen}
        onClose={closeModalEliminar}
        onConfirm={confirmDelete}
      />
      <ModalEditar
        isOpen={isModalEditarOpen}
        onClose={closeModalEditar}
        onSave={saveChanges}
        nota={notaActual}
        setNota={setNotaActual}
      />
    </div>
  );
};

export default Nota;

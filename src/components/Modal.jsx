import React from 'react';

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmar Eliminación</h2>
        <p>¿Estás seguro de que deseas eliminar esta nota?</p>
        <button onClick={onConfirm}>Eliminar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default Modal;

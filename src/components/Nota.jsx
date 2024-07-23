import React from 'react';

const Nota = ({ nota, onDelete }) => {
  return (
    <div className={`nota ${nota.importante ? 'importante' : ''}`}>
      <button className="delete-button" onClick={() => onDelete(nota)}>
        X
      </button>
      <h2>{nota.titulo}</h2>
      <p>{nota.descripcion}</p>
    </div>
  );
};

export default Nota;

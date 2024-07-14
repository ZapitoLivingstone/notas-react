import React from 'react';

const Nota = ({ titulo, descripcion, importante }) => {
  return (
    <div className={`nota ${importante ? 'importante' : ''}`}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
};

export default Nota;

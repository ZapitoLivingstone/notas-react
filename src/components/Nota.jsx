import React from 'react';

const Nota = ({ nota }) => {
  return (
    <div className={`nota ${nota.importante ? 'importante' : ''}`}>
      <h2>{nota.titulo}</h2>
      <p>{nota.descripcion}</p>
    </div>
  );
};

export default Nota;

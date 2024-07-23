import React from 'react';
import Nota from './Nota';

const ListaNotas = ({ notas, onDelete }) => {
  return (
    <div className="lista-notas">
      {notas.map((nota, index) => (
        <Nota key={index} nota={nota} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListaNotas;

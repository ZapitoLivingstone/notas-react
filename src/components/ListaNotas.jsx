import React from 'react';
import Nota from './Nota';

const ListaNotas = ({ notas }) => {
  return (
    <div className="lista-notas">
      {notas.map((nota, index) => (
        <Nota key={index} nota={nota} />
      ))}
    </div>
  );
};

export default ListaNotas;

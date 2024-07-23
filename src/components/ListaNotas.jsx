import React from 'react';
import Nota from './Nota';

const ListaNotas = ({ notas, onDelete, onSave }) => {
  return (
    <div className="lista-notas">
      {notas.map((nota) => (
        <Nota key={nota.id} nota={nota} onDelete={onDelete} onSave={onSave} />
      ))}
    </div>
  );
};

export default ListaNotas;

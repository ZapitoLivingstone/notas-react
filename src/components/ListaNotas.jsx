import React from 'react';
import Nota from './Nota';

const ListaNotas = ({ notas }) => {
  return (
    <div className="lista-notas">
      {notas.map((nota, index) => (
        <Nota
          key={index}
          titulo={nota.titulo}
          descripcion={nota.descripcion}
          importante={nota.importante}
        />
      ))}
    </div>
  );
};

export default ListaNotas;

import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaNotas from './components/ListaNotas';

const App = () => {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const notasAlmacenadas = JSON.parse(localStorage.getItem('notas'));
    if (notasAlmacenadas) setNotas(notasAlmacenadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };

  const eliminarNota = (notaParaEliminar) => {
    setNotas(notas.filter((nota) => nota !== notaParaEliminar));
  };

  const actualizarNota = (notaActualizada) => {
    setNotas(notas.map((nota) => (nota.id === notaActualizada.id ? notaActualizada : nota)));
  };

  return (
    <div className="app">
      <h1>Notas Adhesivas</h1>
      <Formulario agregarNota={agregarNota} />
      <ListaNotas notas={notas} onDelete={eliminarNota} onSave={actualizarNota} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaNotas from './components/ListaNotas';
import './index.css';

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

  return (
    <div className="app">
      <h1>Notas Adhesivas</h1>
      <Formulario agregarNota={agregarNota} />
      <ListaNotas notas={notas} />
    </div>
  );
};

export default App;

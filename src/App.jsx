import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaNotas from './components/ListaNotas';
import Modal from './components/Modal';
import './index.css';

const App = () => {
  const [notas, setNotas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [notaToDelete, setNotaToDelete] = useState(null);

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

  const handleDeleteClick = (nota) => {
    setNotaToDelete(nota);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setNotas(notas.filter((nota) => nota !== notaToDelete));
    setShowModal(false);
    setNotaToDelete(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setNotaToDelete(null);
  };

  return (
    <div className="app">
      <h1>Notas Adhesivas</h1>
      <Formulario agregarNota={agregarNota} />
      <ListaNotas notas={notas} onDelete={handleDeleteClick} />
      <Modal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
    </div>
  );
};

export default App;

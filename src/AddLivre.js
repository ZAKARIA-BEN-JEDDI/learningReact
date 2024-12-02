import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLivre } from './actions';

const AddLivre = () => {
  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titre && categorie) {
      const newLivre = {
        id: Math.floor(Math.random() * 1000),
        titre,
        categorie,
      };
      dispatch(addLivre(newLivre));
      setTitre('');
      setCategorie('');
    }
  };

  return (
    <div>
      <h2>Ajouter un Livre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categorie"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddLivre;

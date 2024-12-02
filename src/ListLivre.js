import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLivre } from './actions';

const ListLivre = () => {
  const livres = useSelector((state) => state.livres);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Liste des Livres</h2>
      <ul>
        {livres.map((livre) => (
          <li key={livre.id}>
            {livre.titre} - {livre.categorie}
            <button onClick={() => dispatch(deleteLivre(livre.id))}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListLivre;

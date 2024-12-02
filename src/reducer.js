const initState = {
  livres: [
    { id: 10, titre: 'REACT REDUX', categorie: 'Front-END' },
    { id: 11, titre: 'LARAVEL', categorie: 'Back-END' },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_LIVRE':
      return {
        ...state,
        livres: [...state.livres, action.payload],
      };

    case 'DELETE_LIVRE':
      return {
        ...state,
        livres: state.livres.filter((livre) => livre.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;

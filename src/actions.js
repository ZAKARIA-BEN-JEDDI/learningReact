export const addLivre = (livre) => {
  return {
    type: 'ADD_LIVRE',
    payload: livre,
  };
};

export const deleteLivre = (id) => {
  return {
    type: 'DELETE_LIVRE',
    payload: id,
  };
};

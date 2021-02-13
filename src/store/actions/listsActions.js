export const addUser = (users) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('users').add({
      ...users,
      kreirano: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_USER',users });
    }).catch(err => {
      dispatch({ type: 'ADD_USER_ERROR' }, err);
    });
  }
};

export const addUser = (users) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "ADD_USER", users });
  }
};

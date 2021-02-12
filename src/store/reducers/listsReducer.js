const initState = {
    users: [
    {
      id: "1",
      imeiprezime: "Ermin Selimovic",
      visina: "179",
      godina: "30",
      kliogrami: "93"
    },
    {
      id: "2",
      imeiprezime: "Zerina Selimovic",
      visina: "160",
      godina: "29",
      kliogrami: "70"
    },
    {
      id: "3",
      imeiprezime: "Amina Halilovic",
      visina: "162",
      godina: "27",
      kliogrami: "52"
    },
  ],
};
const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("Creiran novi user", action.users);
      return state;
    default:
      return state;
  }
};

export default listsReducer;

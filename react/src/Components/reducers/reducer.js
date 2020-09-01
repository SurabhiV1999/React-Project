const initialState = {
  user: {
    username: "",
    emailid: "",
    age: 0,
    gender: "",
  },
  symptom: { weight: [], height: [] },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return state;
    case "USERLOGGEDIN":
      return {
        ...state,
        user: action.data,
      };
    case "UPDATESYMPTOMS":
      return {
        ...state,
        symptom: action.data,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {
          username: "",
          emailid: "",
          age: 0,
          gender: "",
        },
        symptom: {},
      };
    default:
      return state;
  }
};

export default reducer;

export interface userState {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

type Action = { type: "LOGIN_USER"; payload: string };

export const reducer = (state: userState, action: Action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

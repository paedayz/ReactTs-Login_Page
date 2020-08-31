export interface userState {
  user: object;
}

const initialState = {
  user: [],
};

type Action = { type: "LOGIN_USER"; payload: string };

export const userReducer = (
  state: userState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

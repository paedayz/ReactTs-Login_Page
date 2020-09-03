export interface userState {
  userData: object;
}

const initialState = {
  userData: [],
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
        userData: action.payload,
      };
    default:
      return state;
  }
};

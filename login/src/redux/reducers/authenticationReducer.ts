export interface authState {
  authentication: boolean;
}

const initialState = {
  authentication: false,
};

type Action = { type: "LOGIN_USER"; payload: string };

export const authReducer = (
  state: authState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        authentication: true,
      };
    default:
      return state;
  }
};

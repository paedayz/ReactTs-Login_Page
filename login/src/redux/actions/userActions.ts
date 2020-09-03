export type Action = { type: "LOGIN_USER"; payload: object };

export const login = (user_data: object): Action => ({
  type: "LOGIN_USER",
  payload: user_data,
});

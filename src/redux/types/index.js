export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const STORE_USER = "STORE_USER";

export const login = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
export const saveSession = (token: string) => {
  localStorage.setItem("user_pupuk", token);
};

export const getSession = () => {
  return localStorage.getItem("user_pupuk");
};

export const clearSession = () => {
  localStorage.removeItem("user_pupuk");
};

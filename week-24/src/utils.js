export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

export const getAuthToken = () => {
  localStorage.getItem("token");
};

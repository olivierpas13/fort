export const getUserFromLocal = () => {

  return JSON.parse(window.localStorage.getItem('fortCurrentUser'));
};

export const postUserToLocal = (user) => {
  return window.localStorage.setItem('fortCurrentUser', JSON.stringify(user.data));
};
export const getUserFromLocal = () => {

  return JSON.parse(window.localStorage.getItem('fortCurrentUser'));
};

export const postUserToLocal = (user) => {
  return window.localStorage.setItem('fortCurrentUser', JSON.stringify(user));
};

export const getTokenFromLocal = () => {
  console.log(window.localStorage.getItem('next-auth.csrf-token'));
  return JSON.parse(window.localStorage.getItem('next-auth.session-token'));
};
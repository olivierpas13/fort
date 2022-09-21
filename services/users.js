import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/users`;

export const createUser = async (credentials) => {
  return await axios.post(baseUrl, credentials);
};

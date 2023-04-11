import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`;

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default login;
import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/issues`;

export const createIssue = async (data) => {
  return await axios.post(baseUrl, data);
};

import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/issues`;

export const createIssue = async (data) => {
  return await axios.post(baseUrl, data);
};

export const getAllOrganizationIssues = async (organization) => {
  return await axios.get(`${baseUrl}/${organization}`);
};

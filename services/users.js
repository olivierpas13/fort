import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/users`;

export const createUser = async (credentials) => {
  return await axios.post(baseUrl, credentials);
};

export const updateUserOrganization = async (data) => {
  return await axios.patch(`${baseUrl}/${data.userId}`, data);
};

export const updateUserRole = async (cell) => {
  return await axios.patch(`${baseUrl}/${cell.id}/role`, { value: cell.value });
};

export const getAllOrganizationUsers = async (organization) => {
  return await axios.get(`${baseUrl}/${organization}`);
};
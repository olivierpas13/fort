import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`;

export const createUser = async (credentials) => {
  return await axios.post(baseUrl, credentials);
};
export const addUserFromGit = async (data) => {
  return await axios.post(`${baseUrl}/${data.id}/add-from-git`, data);
};

export const getIndividualUser = async (id) => {
  return await axios.get(`${baseUrl}/${id}`);
};

export const updateUserOrganization = async (data) => {
  return await axios.patch(`${baseUrl}/${data.userId}`, data);
};

export const addUserFromGithub = async (data) => {
  return await axios.patch(`${baseUrl}/${data.userId}/add-from-git`, { code: data.code });
};

export const updateUserRole = async (cell) => {
  return await axios.patch(`${baseUrl}/${cell.id}/role`, { value: cell.value });
};

export const getAllOrganizationUsers = async (organization) => {
  return await axios.get(`${baseUrl}/organization/${organization}`);
};
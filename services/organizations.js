import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/organization`;

export const getAllOrganizaitions = async () => {
  return await axios.get(baseUrl);
};

export const getSingleOrganization = async (id) => {
  return await axios.get(`${baseUrl}/${id}`);
};

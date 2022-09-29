import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/organization`;

export const getAllOrganizaitions = async () => {
  return await axios.get(baseUrl);
};

export const getSingleOrganization = async (name) => {
  return await axios.get(`${baseUrl}/${name}`);
};

import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/projects`;

export const createProject = async (data) => {
  return await axios.post(baseUrl, data);
};

export const getAllOrganizationProjects = async (organization) => {
  return await axios.get(`${baseUrl}/organization/${organization}`);
};

export const getSingularProject = async ( project ) => {
  return await axios.get(`${baseUrl}/${project}`);
};

export const getProjectStats = async (project) => {
  return await axios.get(`${baseUrl}/${project}/stats`);
};

export const getProjectWeeklyStats = async (project) => {
  return await axios.get(`${baseUrl}/${project}/weeklyStats`);
};
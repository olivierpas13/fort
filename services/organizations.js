import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/organization`;

export const getAllOrganizaitions = async () => {
  return await axios.get(baseUrl);
};

export const getSingleOrganization = async (name) => {
  return await axios.get(`${baseUrl}/${name}`);
};


export const getInvitationCode = async (obj) => {
  return await axios.post(`${baseUrl}/${obj.name}/invitation/${obj.role}`, {
    orgInvitationCode: obj.orgCode,
    project: obj.project });
};

export const getAllProjectsWeeklyStats = async (organization) => {
  return await axios.get(`${baseUrl}/${organization}/allProjects/weeklyStats`);
};
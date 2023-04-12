import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/issues`;

export const createIssue = async (issue) => {
  return await axios.post(baseUrl, issue);
};

export const editIssue = async (issue) => {
  return await axios.patch(`${baseUrl}/edit/${issue.id}`, issue);
};

export const getAllOrganizationIssues = async (organization) => {
  return await axios.get(`${baseUrl}/${organization}`);
};

export const getAllOrganizationStats = async (organization) => {
  return await axios.get(`${baseUrl}/${organization}/stats`);
};

import axios from 'axios';

const baseUrl = `${process.env.BACKEND_URL}/api/projects`;

export const createProject = async (data) => {
  return await axios.post(baseUrl, data);
};

// export const updateUserOrganization = async (data) => {
//   return await axios.patch(`${baseUrl}/${data.userId}`, data);
// };

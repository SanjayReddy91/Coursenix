import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const api = {
  user: {
    signup: (data) => axios.post(`${API_BASE_URL}/user/signup`, data),
    signin: (data) => axios.post(`${API_BASE_URL}/user/signin`, data),
    purchases: (token) =>
      axios.get(`${API_BASE_URL}/user/purchases`, {
        headers: { token },
      }),
  },
  admin: {
    signup: (data) => axios.post(`${API_BASE_URL}/admin/signup`, data),
    signin: (data) => axios.post(`${API_BASE_URL}/admin/signin`, data),
    createCourse: (data, token) =>
      axios.post(`${API_BASE_URL}/admin/create-course`, data, {
        headers: { token },
      }),
    updateCourse: (data, token) =>
      axios.put(`${API_BASE_URL}/admin/update-course`, data, {
        headers: { token },
      }),
    bulkCourses: (token) =>
      axios.get(`${API_BASE_URL}/admin/course/bulk`, {
        headers: { token },
      }),
  },
  courses: {
    preview: () => axios.get(`${API_BASE_URL}/course/preview`),
    purchase: (data, token) =>
      axios.post(`${API_BASE_URL}/course/purchase`, data, {
        headers: { token },
      }),
  },
};

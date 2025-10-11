import api from "./api.js"
const API_URL = import.meta.env.VITE_API_URL;
const ENDPOINT = `${API_URL}/activity`;

const addActivity = async (data) => {
    return await api.post(`${ENDPOINT}`, data);
}

const showAllActivityDetails = async () => {
    const response = await api.get(`${ENDPOINT}`);
    return response;
}

const showAllActivityDetailsById = async (id) => {
  return await api.get(`${ENDPOINT}/${id}`);
};

const updateActivity = async (id, data) => {
  return await api.put(`${ENDPOINT}/${id}`, data);
};

const deleteActivityById = async (id) => {
  return await api.delete(`${ENDPOINT}/${id}`);
};

const ActivityService = {
  addActivity,
  showAllActivityDetails,
  showAllActivityDetailsById,
  updateActivity,
  deleteActivityById,
};

export default ActivityService;
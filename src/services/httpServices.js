import axios from 'axios';

const BASE_URL = 'https://manager-tasks-fdchiozzi.herokuapp.com' || 'http://localhost:3001';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

async function getAll(url) {
  const { data } = await axiosInstance.get(url);
  return data;
}

export default getAll;

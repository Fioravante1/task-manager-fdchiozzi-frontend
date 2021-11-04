import getAll from './httpServices';

async function apiGetAllTasks() {
  const allTasks = await getAll('/tasks');
  return allTasks;
}

export default apiGetAllTasks;

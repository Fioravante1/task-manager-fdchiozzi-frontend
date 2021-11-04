import React, { useEffect, useState } from 'react';
import './App.css';
import apiGetAllTasks from './services/apiRequest';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAll() {
      const apiResponse = await apiGetAllTasks();
      setData(apiResponse);
    }
    getAll();
  }, []);

  return (
    <p>
      {data.map((value) => value.task)}
    </p>
  );
}

export default App;

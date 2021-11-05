import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import apiGetAllTasks from '../../services/apiRequest';
import styles from './listTasks.module.css';

function ListTasks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAll() {
      const apiResponse = await apiGetAllTasks();
      setData(apiResponse);
    }
    getAll();
  }, []);

  return (
    <>
      <div className={styles.container__list}>

        <h3>
          Tarefas do dia
        </h3>

        <div className={styles.container__newList}>
          <TextField
            className={styles.input__tarefa}
            label="Adicione a tarefa"
            variant="standard"
          />

          <TextField
            multiline
            className={styles.input__tarefa}
            label="Descrição"
            variant="standard"
          />

          <Button className={styles.btn} variant="outlined">Criar tarefa</Button>

        </div>

      </div>

      <div>
        <p>
          {
          data.map((value) => value.tasks)
        }
        </p>
      </div>
    </>
  );
}

export default ListTasks;

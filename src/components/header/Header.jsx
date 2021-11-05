import React from 'react';
import { Avatar, InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styles from './header.module.css';
import TaskManager from '../../Assets/TaskManager3.png';

function Header() {
  return (
    <div className={styles.container__header}>
      <div className={styles.container__img}>
        <img src={TaskManager} alt="logo" />
      </div>

      <div className={styles.container__pesquisar}>
        <TextField
          fullWidth
          className={styles.input__pesquisar}
          size="small"
          variant="outlined"
          color="secondary"
          placeholder="Pesquisar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Avatar className={styles.avatar}>F</Avatar>
    </div>
  );
}

export default Header;

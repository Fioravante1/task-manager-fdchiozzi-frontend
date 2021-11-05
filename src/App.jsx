import React from 'react';
import HomeListTasks from './pages/HomeListTasks';
import Header from './components/header/Header';
import styles from './styles/app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <HomeListTasks />
    </div>
  );
}

export default App;

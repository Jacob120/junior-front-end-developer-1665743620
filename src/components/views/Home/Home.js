import React from 'react';
import styles from './Home.module.scss';
import BusinessContext from '../../features/BusinessContext/BusinessContext';
import TaskPlanner from '../../features/TaskPlanner/TaskPlanner';

const Home = () => {
  return (
    <div className={styles.root}>
      <TaskPlanner />
      <BusinessContext />
    </div>
  );
};

export default Home;

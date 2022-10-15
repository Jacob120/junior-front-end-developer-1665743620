import React from 'react';
import styles from './Home.module.scss';
import SprintDetails from '../../features/SprintDetails/SprintDetails';
import TaskPlanner from '../../features/TaskPlanner/TaskPlanner';

const Home = () => {
  return (
    <div className={styles.root}>
      <TaskPlanner />
      <SprintDetails />
    </div>
  );
};

export default Home;

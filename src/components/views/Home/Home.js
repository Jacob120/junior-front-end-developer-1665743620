import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import BusinessContext from '../../features/BusinessContext/BusinessContext';
import TaskPlanner from '../../features/TaskPlanner/TaskPlanner';
import { tasksData } from '../../../data/tasksData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const task = tasksData.find((task) => task.status === 'active');

  useEffect(() => {
    task && navigate(`/${task.id}/context/2`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.root}>
      <TaskPlanner />
      <BusinessContext />
    </div>
  );
};

export default Home;

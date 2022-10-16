import React from 'react';
import styles from './TaskPlanner.module.scss';
import { tasksData } from '../../../data/tasksData';
import Task from '../../common/Task/Task';

const TaskPlanner = () => {
  const tasks = tasksData;

  return (
    <div className={styles.root}>
      <p className={styles.tasks_header}>Your Tasks</p>
      <div className={styles.divider}></div>
      <ul className={styles.tasks_list}>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskPlanner;

import React from 'react';
import styles from './TaskPlanner.module.scss';
import { tasksData } from '../../../data/tasksData';

const TaskPlanner = () => {
  const tasks = tasksData;

  return (
    <div className={styles.root}>
      <p className={styles.tasks_header}>Your Tasks</p>
      <div className={styles.divider}></div>
      <ul className={styles.tasks_list}>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className={styles.task_wrapper}>
              <div>
                <img
                  src={
                    task.status === 'active'
                      ? 'assets/active.svg'
                      : task.status === 'blocked'
                      ? `assets/block.svg`
                      : `assets/completed.svg`
                  }
                  alt={`Task title: ${task.name}`}
                  className={styles.icons}
                />
              </div>
              <div
                className={
                  task.status === 'active'
                    ? styles.active
                    : task.status === 'blocked'
                    ? styles.blocked
                    : styles.completed
                }
              >
                {task.title}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPlanner;

import React from 'react';
import styles from './Task.module.scss';

const Task = ({ id, status, name, title }) => {
  return (
    <li>
      <div className={styles.task_wrapper}>
        <div>
          <img
            src={
              status === 'active'
                ? 'assets/active.svg'
                : status === 'blocked'
                ? `assets/block.svg`
                : `assets/completed.svg`
            }
            alt={`Task title: ${name}`}
            className={styles.icons}
          />
        </div>
        <div
          className={
            status === 'active'
              ? styles.active
              : status === 'blocked'
              ? styles.blocked
              : styles.completed
          }
        >
          {title}
        </div>
      </div>
    </li>
  );
};

export default Task;

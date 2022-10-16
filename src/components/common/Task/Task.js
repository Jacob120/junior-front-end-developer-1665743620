import React from 'react';
import styles from './Task.module.scss';
import { NavLink } from 'react-router-dom';

const Task = ({ id, status, name, title }) => {
  return (
    <li className={styles.root}>
      <NavLink
        to={'/' + id}
        className={({ isActive }) =>
          isActive
            ? styles.isActive
            : status === 'blocked'
            ? styles.isDisabled
            : styles.isCompleted
        }
      >
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
          <div>{title}</div>
        </div>
      </NavLink>
    </li>
  );
};

export default Task;

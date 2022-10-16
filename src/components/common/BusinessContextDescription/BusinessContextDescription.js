import React from 'react';
import { tasksData } from '../../../data/tasksData';
import styles from './BusinessContextDescription.module.scss';

const BusinessContextDescription = (props) => {
  const task = tasksData[0];
  const context = task.businessContext[0];

  return (
    <div className={styles.root}>
      <h1>{context.title}</h1>
      <div className={styles.context_details}>
        <img src='assets/author-photo.png' alt='' className={styles.avatar} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.author}>{context.author}</h2>
            <span>&bull;</span>
            <span>
              {new Intl.DateTimeFormat('en-GB', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              }).format(context.created_at)}
            </span>
          </div>
          <p>{context.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessContextDescription;

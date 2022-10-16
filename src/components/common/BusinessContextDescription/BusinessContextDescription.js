import React from 'react';
import { useParams } from 'react-router';
import { tasksData } from '../../../data/tasksData';
import styles from './BusinessContextDescription.module.scss';

const BusinessContextDescription = (props) => {
  const { taskId } = useParams();
  const { contextId } = useParams();

  const task = taskId
    ? tasksData.find((task) => task.id === taskId)
    : tasksData.find((task) => task.status === 'active');
  const data = contextId
    ? task.businessContext.find((context) => context.id === contextId)
    : task.businessContext.find((context) => context.status === 'active');

  return (
    <div className={styles.root}>
      <h1>{data && data.title}</h1>
      <div className={styles.context_details}>
        <img src='assets/author-photo.png' alt='' className={styles.avatar} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.author}>{data && data.author}</h2>
            <span>&bull;</span>
            <span>
              {new Intl.DateTimeFormat('en-GB', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              }).format(data && data.created_at)}
            </span>
          </div>
          <p>{data && data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessContextDescription;

import React from 'react';
import { useParams } from 'react-router';
import { tasksData } from '../../../data/tasksData';
import BusinessContextCard from '../../common/BusinessContextCard/BusinessContextCard';
import BusinessContextDescription from '../../common/BusinessContextDescription/BusinessContextDescription';
import styles from './BusinessContext.module.scss';

const BusinessContext = () => {
  const { taskId } = useParams();

  const tasks = taskId
    ? tasksData.find((task) => task.id === taskId)
    : tasksData.find((task) => task.status === 'active');

  const contexts = tasks.status !== 'blocked' && tasks.businessContext;

  return (
    <div className={styles.root}>
      <div className={styles.header_wrapper}>
        <img src='assets/bcicon.svg' alt='' />
        <p className={styles.business_header}>Business Context</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <div className={styles.left_box}>
          {contexts.map((context) => (
            <BusinessContextCard key={context.id} {...context} />
          ))}
        </div>
        <BusinessContextDescription {...contexts} />
      </div>
    </div>
  );
};

export default BusinessContext;

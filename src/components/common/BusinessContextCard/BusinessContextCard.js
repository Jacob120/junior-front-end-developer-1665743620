import React from 'react';
import styles from './BusinessContextCard.module.scss';

const BusinessContextCard = ({
  title,
  author,
  created_at,
  status,
  content,
}) => {
  const date = new Date();
  const difference = Math.abs(date.getTime() - created_at.getTime());
  const daysGone = Math.floor(difference / (1000 * 3600 * 24));
  const isNew = status === 'new';
  const isActive = status === 'active';
  const isRead = status === 'read';
  const shortDescription = content.slice(0, 80) + '...';

  return (
    <div
      className={
        styles.root +
        ' ' +
        (isActive ? styles.active_card : isRead ? styles.read_card : '')
      }
    >
      <div className={styles.context_card}>
        <div className={styles.context_header}>
          {isNew && <span className={styles.context_status}>{status}</span>}
          <p>{author}</p>
          <span>&bull;</span>
          {
            <span>
              {daysGone > 1 ? `${daysGone} days ago` : `${daysGone} day ago`}
            </span>
          }
        </div>
        <div>
          <h4 className={isNew ? styles.active_title : ''}>{title}</h4>
          <p className={styles.description}>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessContextCard;

import React, { useEffect, useState } from 'react';
import styles from './BusinessContextCard.module.scss';
import { NavLink, useParams } from 'react-router-dom';

const BusinessContextCard = ({
  title,
  author,
  created_at,
  status,
  content,
  id,
}) => {
  const { taskId } = useParams();
  const { contextId } = useParams();

  const date = new Date();
  const difference = Math.abs(date.getTime() - created_at.getTime());
  const daysGone = Math.floor(difference / (1000 * 3600 * 24));
  const shortDescription = content.slice(0, 80) + '...';

  const [activeStatus, setActiveStatus] = useState(status);
  const isRead = activeStatus === 'read';
  const isNew = activeStatus === 'new';

  const handleClick = () => {
    setActiveStatus('read');
  };

  useEffect(() => {
    setActiveStatus(status);
    if (activeStatus === 'active') setActiveStatus('read');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId, status]);

  return (
    <div
      className={
        styles.root +
        ' ' +
        (id === contextId ? styles.active_card : isRead ? styles.read_card : '')
      }
    >
      <NavLink to={`/${taskId}/context/${id}`} onClick={handleClick}>
        <div>
          <div className={styles.context_header}>
            {isNew && <span className={styles.context_status}>New</span>}
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
      </NavLink>
    </div>
  );
};

export default BusinessContextCard;

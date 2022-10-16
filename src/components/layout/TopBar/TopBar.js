import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <img src='assets/logo.svg' alt='' />
        <img
          src='assets/user-photo.png'
          alt=''
          className={styles.user_avatar}
        />
      </div>
    </div>
  );
};

export default TopBar;

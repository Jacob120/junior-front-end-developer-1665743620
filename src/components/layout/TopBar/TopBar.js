import React from 'react';
import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <img src='assets/logo.svg' alt='' />
        </Link>
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

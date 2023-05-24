import React from 'react';
import styles from './style.module.css';

const Avatar = ({userInfo}) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.statusIndicator} />
      <img className={styles.avatarImage} src={userInfo?.avatar} alt="Avatar" height='40' width='40' />
    </div>
  );
};

export default Avatar;
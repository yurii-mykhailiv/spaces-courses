import React from 'react';

import Avatar from '../Avatar/Avatar';

import styles from './style.module.css';

const UserInfo = ({userInfo}) => {

  return (
    <div className={styles.userInfo}>
      <div className={styles.info}>
        <div className={styles.name}>{userInfo?.name}</div>
        <div className={styles.role}>{userInfo?.role}</div>
      </div>
      <Avatar userInfo={userInfo}/>
    </div>
  )
}

export default UserInfo
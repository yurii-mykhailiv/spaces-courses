import React from 'react'

import { ReactComponent as NotificationIcon } from '../../assets/SVG/menu/Notification.svg';
import styles from './style.module.css';

const Notification = () => {
  return (
    <div className={styles.wrapper}>
      <NotificationIcon height='48px' className={styles.notificationIcon}/>
    </div>
  )
}

export default Notification;
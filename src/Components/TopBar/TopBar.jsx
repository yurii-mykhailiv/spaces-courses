import React from 'react';

import Search from '../Search/Search';
import LanguagesDropdown from '../LanguagesDropdown/LanguagesDropdown';
import Notification from '../Notification/Notification';
import UserInfo from '../UserInfo/UserInfo';

import styles from './style.module.css';

const TopBar = ({userInfo}) => {
  return (
    <div className={styles.topBar}>
      <Search/>
      <div className={styles.leftSection}>
        <LanguagesDropdown/>
        <Notification/>
        <UserInfo userInfo={userInfo}/>
      </div>
    </div>
  )
}

export default TopBar;

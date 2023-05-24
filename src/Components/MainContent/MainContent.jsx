import React from 'react';

import styles from './style.module.css';
import ProgressBoard from '../ProgressBoard/ProgressBoard';
import CoursesProgress from '../CoursesProgress/CoursesProgress';
import BlockCoursesProgress from '../BlockCoursesProgress/BlockCoursesProgress';
import NewAdditions from '../NewAdditions/NewAdditions';

const MainContent = ({userInfo}) => {
  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.topSection}>
      <ProgressBoard userInfo={userInfo}/>
      <div className={styles.mainSection}>
        <CoursesProgress userInfo={userInfo}/>
        <BlockCoursesProgress />
      </div>
      </div>
      <div className={styles.bottomSection}>
        <NewAdditions/>
        <NewAdditions/>
        <NewAdditions/>
      </div>
    </div>  
  )
}

export default MainContent
import React from 'react'
import styles from './style.module.css';
import Chip from '../Chip/Chip';

const CoursesProgress = ({userInfo}) => {
  return (
    <div className={styles.wrapper}>
        <Chip title={`${userInfo?.completed} Completed`} bottom={20}/>
    </div>
  )
}

export default CoursesProgress
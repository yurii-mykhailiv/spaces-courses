import React from 'react';

import { ReactComponent as CoursesProgress } from '../../assets/SVG/CoursesProgress/CoursesProgress.svg';
import { ReactComponent as FolderProgress } from '../../assets/SVG/CoursesProgress/FoldersProgress.svg';
import { ReactComponent as BooksProgress } from '../../assets/SVG/CoursesProgress/BooksProgress.svg';

import styles from './style.module.css';

const BlockCoursesProgress = () => {
  const data = [
    {
      title: 'Courses completed',
      length: '15',
      progress: '3',
      image: CoursesProgress
    },
    {
      title: 'Folders added',
      length: '10',
      progress: '6',
      image: FolderProgress
    },
    {
      title: 'Books read',
      length: '19',
      progress: '3',
      image: BooksProgress
    }
  ];

  return (
    <div className={styles.blockCoursesProgress}>
      {data.map((item, index) => {
        const ProgressIcon = item.image; 
        return (
        <div className={styles.block} key={index}>
          <div className={styles.imageWrapper}>
            <ProgressIcon className={styles.image}/>
          </div>
          <div className={styles.progressDescription}>
          <div className={styles.progressBar}>
            <div className={styles.progress}>{item.progress} 
              <span className={styles.length}> / {item.length}</span>
            </div>
          </div>
          <div className={styles.title}>{item.title}</div>
          </div>
        </div>
          );
        })}
    </div>
  );
}

export default BlockCoursesProgress;
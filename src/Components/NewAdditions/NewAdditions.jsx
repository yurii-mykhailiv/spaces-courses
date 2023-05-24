import React from 'react';
import { ReactComponent as Plus } from '../../assets/SVG/NewAdditional/Plus.svg';
import { ReactComponent as Details } from '../../assets/SVG/NewAdditional/Details.svg';
import { ReactComponent as Courses } from '../../assets/SVG/NewAdditional/Courses.svg';
import { ReactComponent as User } from '../../assets/SVG/NewAdditional/User.svg';

import styles from './style.module.css';

const NewAdditions = () => {
  return (
    <div className={styles.newAdditions}>
      <section className={styles.topSection}>
        <button className={styles.buttonWithFrame}>
          <Plus className={styles.icon} />
        </button>
        <div className={styles.title}>NewAdditions</div>
        <button className={styles.button}>
          <Details className={styles.icon} />
        </button>
      </section>
      <section className={styles.section}>
        <div className={styles.item}>
          <Courses className={styles.bookIcon} />
          <span className={styles.count}>13</span>
        </div>
        <div className={styles.item}>
          <User className={styles.icon} />
          <span className={styles.count}>2873</span>
        </div>
      </section>
    </div>
  );
};
export default NewAdditions;
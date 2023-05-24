import React from 'react';
import Chip from '../Chip/Chip';
import { ReactComponent as WavingHand } from '../../assets/SVG/WavingHand.svg';
import planet from '../../assets/Planet.png'
import { ReactComponent as Progress } from '../../assets/SVG/Progres.svg';

import styles from './style.module.css';

const ProgressBoard = ({userInfo}) => {
  return (
    <div className={styles.progressBoard}>
      <div className={styles.greeting}>
        Hey, {userInfo?.name}!
        <WavingHand/>
      </div>
      <div className={styles.text}>Here’s complex overview of your progress</div>
      <div className={styles.planetWrapper}>
        <div className={styles.planetCircle}>
          <img src={planet} alt="planet" className={styles.planet}/>
          <div className={styles.count}>4</div>
          <Progress className={styles.progress}/>
          <Chip title="Level" fontSize="14px" fontWeight={400} padding="4px 10px" bottom={80}/>
        </div>
      </div>
        <div className={styles.text}>{userInfo?.nextLevel} % to reach next level</div>
    </div>
  )
}

export default ProgressBoard;
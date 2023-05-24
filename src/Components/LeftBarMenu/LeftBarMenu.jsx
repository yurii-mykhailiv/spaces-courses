import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { logoutUser } from '../../Store/Slice/Slice';

import { ReactComponent as MainLogo } from '../../assets/SVG/mainLogo.svg';
import { ReactComponent as Home } from '../../assets/SVG/menu/Home.svg';
import { ReactComponent as Courses } from '../../assets/SVG/menu/Courses.svg';
import { ReactComponent as Libraries } from '../../assets/SVG/menu/Libraries.svg';
import { ReactComponent as Statistics } from '../../assets/SVG/menu/Statistics.svg';
import { ReactComponent as Users } from '../../assets/SVG/menu/UsersGuideline.svg';
import { ReactComponent as Exit } from '../../assets/SVG/menu/Exit.svg';

import styles from './style.module.css';

const LeftBarMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutUser());
    navigate('/sign-in'); 
  };


  return (
    <div className={styles.sidebarMenu}>
      <div className={styles.logo}>
      <MainLogo height={28}/>
      </div>
      <ul className={styles.pageLinks}>
        <li className={styles.activeLink}>
          <Home height="18"/>
          Home
        </li>
        <li className={styles.pageLink}>
          <Courses height="18"/>
          Courses
        </li>
        <li className={styles.pageLink}>
          <Libraries height="18"/>
          Libraries
        </li>
        <li className={styles.pageLink}>
          <Statistics height="18"/>
          Statistics
        </li>
        <div className={styles.line}/>
        <li className={styles.pageLink}>
          <Users height="18"/>
          Users guideline
        </li>
      </ul>
      <button className={styles.logoutButton} onClick={logOut}>
        <Exit height="18px"/>
        Sign Out
      </button>
    </div>
  );
};


export default LeftBarMenu;
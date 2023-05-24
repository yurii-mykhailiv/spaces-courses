import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currentUser } from '../../Store/Slice/Slice';
import LeftBarMenu from "../../Components/LeftBarMenu/LeftBarMenu";
import TopBar  from "../../Components/TopBar/TopBar";
import MainContent from "../../Components/MainContent/MainContent";

import styles from './style.module.css';

const HomePage = () =>  {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.currentUser.data);

  useEffect(()=>{
    dispatch(currentUser());
  },[dispatch])

  return(
    <div className={styles.wrapper} >
      <div className={styles.container}>
        <TopBar userInfo={userInfo}/>
        <MainContent userInfo={userInfo}/>
      </div>
      <LeftBarMenu/>
    </div>
  )
};

export default HomePage;
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as MainLogo } from '../../assets/SVG/mainLogo.svg';
import { loginUser } from '../../Store/Slice/Slice';
import { useNavigate } from 'react-router-dom';


import styles from './style.module.css';


const SignInPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(user.data){
      navigate('/')
    }else{
      navigate('/sign-in')
    }
  },[user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({email:email,password:password}));
  };

  return (
    <div className={styles.signInPage}>
      <div className={styles.background}></div>
      <div className={styles.signInForm}>
        <MainLogo className={styles.logo} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

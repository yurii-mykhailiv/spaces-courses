import React, { useState, useRef , useEffect} from 'react';

import { ReactComponent as ArrowDown } from '../../assets/SVG/menu/ArrowDown.svg';
import styles from './style.module.css';


const LanguagesDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.selectedLanguage} onClick={toggleDropdown}>
        {selectedLanguage}
        <ArrowDown 
          className={dropdownOpen ? styles.arrowDownRotated : styles.arrowDown}
          height='48px'/>
      </div>
      {dropdownOpen && (
        <ul className={styles.languageList}>
          <li onClick={() => handleLanguageChange('EN')}>English</li>
          <li onClick={() => handleLanguageChange('UA')}>Українська</li>
          <li onClick={() => handleLanguageChange('FR')}>Français</li>
        </ul>
      )}
    </div>
  );
};

export default LanguagesDropdown;
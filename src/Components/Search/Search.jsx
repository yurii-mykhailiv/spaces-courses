import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/SVG/menu/Search.svg';
import styles from './style.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchIcon className={styles.searchIcon} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
import React from 'react'
import styles from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <div className={styles.searchBar}>
          <input type='text' />
          <button type='submit' className={styles.searchButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          </button>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faHome} />
            <span>HOME</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faFilm} />
            <span>MOVIES</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faRectangleList} />
            <span>MY LIST</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
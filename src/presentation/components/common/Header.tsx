'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from './Header.module.css'; 
import Image from 'next/image';
import userImg from '../../../../public/images/userIcon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from  './Menu';

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {

  const [ active, setActive ] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const [ activeMenu, setActiveMenu ] = useState(false)
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setActive((prev) => !prev);
  }

  const toggleDropdownMenu = () => {
    const newMenuState = !activeMenu;
    setActiveMenu(newMenuState);
    onMenuToggle(newMenuState);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if( dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setActive(false)
      }
    };

    const handleClickOutsideMenu = (event: MouseEvent) => {
      if( dropDownMenuRef.current && !dropDownMenuRef.current.contains(event.target as Node)) {
        setActiveMenu(false);
        onMenuToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('mousedown', handleClickOutsideMenu)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('mousedown', handleClickOutsideMenu)
    }

  }, [dropDownRef, dropDownMenuRef, onMenuToggle])

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.navigation}>
          <div className="dropDownMenu" ref={dropDownMenuRef}>
          <FontAwesomeIcon icon={faBars} className={styles.bars} onClick={toggleDropdownMenu}/>
          {activeMenu && (
            <Menu isOpen={activeMenu} />
          )}
          </div>
          <div className={styles.navigationItems}>
            <a href='#' className={styles.navigationItem}>Home</a>
            <a href='#' className={styles.navigationItem}>Movies</a>
            <a href='#' className={styles.navigationItem}>News</a>
          </div>
        </div>
        <h3 className={styles.title}>RevWeb</h3>
        <div className={styles.user}>
          <h6 className={styles.username}>PAULITO</h6>
          <div className={styles.dropdown} ref={dropDownRef}>
          <Image src={userImg} alt='user' className={styles.userImg} onClick={toggleDropdown}/>
          {active && (
            <div className={styles.dropdownContent}>
              <a href='#' className={styles.dropdownItem}>Profile</a>
              <a href='#' className={styles.dropdownItem}>Settings</a>
              <a href='#' className={styles.dropdownItem}>Logout</a>
            </div>
          )}
        </div>
        </div>
    </div>
    </div>
  );
};

export default Header;

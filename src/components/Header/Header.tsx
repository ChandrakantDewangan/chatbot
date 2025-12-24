import React from 'react';
import { FiCpu } from 'react-icons/fi';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <FiCpu />
        </div>
        <span className={styles.logoText}>AI Assistant</span>
      </div>
      <UserAvatar />
    </header>
  );
};

export default Header;

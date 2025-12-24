import React, { useState, useRef, useEffect, useContext } from 'react';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { GlobalContext } from '../../Context/GlobalContext';
import styles from './UserAvatar.module.css';

const UserAvatar: React.FC = () => {
  const { storeData, setStoreData } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfile = () => {
    setIsOpen(false);
  };

  const handleAdminSettings = () => {
    setStoreData((prev) => ({
      ...prev,
      IsAdminVisible: true,
    }));
    setIsOpen(false);
  };

  const handleLogout = () => {
    setStoreData((prev) => ({
      ...prev,
      UserDetails: null,
    }));
    setIsOpen(false);
  };

  const getInitials = () => {
    if (storeData.UserDetails?.user_name) {
      return storeData.UserDetails.user_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return 'U';
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        className={styles.avatarButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.avatar}>
          {getInitials()}
        </div>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                {storeData.UserDetails?.user_name || 'Guest User'}
              </div>
              <div className={styles.userEmail}>
                {storeData.UserDetails?.email || 'guest@example.com'}
              </div>
            </div>
          </div>
          <div className={styles.dropdownDivider} />
          <button className={styles.dropdownItem} onClick={handleProfile}>
            <FiUser className={styles.dropdownIcon} />
            <span>Profile</span>
          </button>
          {storeData.UserDetails?.IsAdmin && (
            <button className={styles.dropdownItem} onClick={handleAdminSettings}>
              <FiSettings className={styles.dropdownIcon} />
              <span>Admin Settings</span>
            </button>
          )}
          <div className={styles.dropdownDivider} />
          <button
            className={`${styles.dropdownItem} ${styles.logoutItem}`}
            onClick={handleLogout}
          >
            <FiLogOut className={styles.dropdownIcon} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;

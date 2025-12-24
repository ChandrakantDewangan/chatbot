import React from 'react';
import { FiUser, FiCpu } from 'react-icons/fi';
import styles from './ChatMessage2.module.css';

interface ChatMessage2Props {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage2: React.FC<ChatMessage2Props> = ({
  message,
  isUser,
  timestamp,
}) => {
  return (
    <div className={`${styles.container} ${isUser ? styles.userMessage : styles.botMessage}`}>
      <div className={styles.bubble}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            {isUser ? <FiUser className={styles.icon} /> : <FiCpu className={styles.icon} />}
          </div>
          <span className={styles.sender}>{isUser ? 'You' : 'Assistant'}</span>
        </div>
        <div className={styles.message}>{message}</div>
        {timestamp && <div className={styles.timestamp}>{timestamp}</div>}
      </div>
    </div>
  );
};

export default ChatMessage2;

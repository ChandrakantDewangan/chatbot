import React from 'react';
import { FiUser, FiCpu } from 'react-icons/fi';
import styles from './ChatMessage1.module.css';

interface ChatMessage1Props {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage1: React.FC<ChatMessage1Props> = ({
  message,
  isUser,
  timestamp,
}) => {
  return (
    <div className={`${styles.container} ${isUser ? styles.userMessage : styles.botMessage}`}>
      <div className={styles.iconWrapper}>
        {isUser ? <FiUser className={styles.icon} /> : <FiCpu className={styles.icon} />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sender}>{isUser ? 'You' : 'Assistant'}</span>
          {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
        </div>
        <div className={styles.message}>{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage1;

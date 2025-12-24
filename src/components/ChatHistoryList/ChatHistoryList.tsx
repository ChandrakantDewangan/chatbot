import React from 'react';
import { FiMessageSquare, FiClock } from 'react-icons/fi';
import { Session } from '../../Interfaces/Interfaces';
import styles from './ChatHistoryList.module.css';

interface ChatHistoryListProps {
  sessions: Session[];
  currentSessionId: string;
  onSelectSession: (sessionId: string) => void;
}

const ChatHistoryList: React.FC<ChatHistoryListProps> = ({
  sessions,
  currentSessionId,
  onSelectSession,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  if (sessions.length === 0) {
    return (
      <div className={styles.emptyState}>
        <FiMessageSquare className={styles.emptyIcon} />
        <p className={styles.emptyText}>No chat history yet</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Chats</h3>
      </div>
      <div className={styles.list}>
        {sessions.map((session) => (
          <button
            key={session.session_id}
            className={`${styles.sessionItem} ${
              currentSessionId === session.session_id ? styles.active : ''
            }`}
            onClick={() => onSelectSession(session.session_id)}
          >
            <div className={styles.sessionIcon}>
              <FiMessageSquare />
            </div>
            <div className={styles.sessionContent}>
              <div className={styles.sessionName}>{session.session_name}</div>
              <div className={styles.sessionMeta}>
                <FiClock className={styles.clockIcon} />
                <span>{formatDate(session.updated_at)}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatHistoryList;

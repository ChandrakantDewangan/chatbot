import React, { useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { GlobalContext } from '../../Context/GlobalContext';
import ModelSelector from '../ModelSelector/ModelSelector';
import ChatHistoryList from '../ChatHistoryList/ChatHistoryList';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const { storeData, setStoreData } = useContext(GlobalContext);

  const handleNewChat = () => {
    setStoreData((prev) => ({
      ...prev,
      IsWelcomeWindowVisible: true,
      IsChatWindowVisible: false,
      CurrentSessionID: '',
      CurrentPrompt: '',
      ChatHistory: null,
    }));
  };

  const handleSelectSession = (sessionId: string) => {
    setStoreData((prev) => ({
      ...prev,
      CurrentSessionID: sessionId,
      IsWelcomeWindowVisible: false,
      IsChatWindowVisible: true,
    }));
  };

  const mockSessions = [
    {
      session_id: '1',
      session_name: 'Introduction to AI',
      user_id: 'user1',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status: 'active',
    },
    {
      session_id: '2',
      session_name: 'Project Planning Discussion',
      user_id: 'user1',
      created_at: new Date(Date.now() - 86400000).toISOString(),
      updated_at: new Date(Date.now() - 86400000).toISOString(),
      status: 'active',
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <button className={styles.newChatButton} onClick={handleNewChat}>
          <FiPlus className={styles.buttonIcon} />
          <span>New Chat</span>
        </button>
      </div>

      <div className={styles.modelSection}>
        <ModelSelector />
      </div>

      <div className={styles.historySection}>
        <ChatHistoryList
          sessions={mockSessions}
          currentSessionId={storeData.CurrentSessionID}
          onSelectSession={handleSelectSession}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { sendPrompt } from '../../services/api';
import { toast } from 'react-toastify';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import ChatWindow from '../ChatWindow/ChatWindow';
import styles from './ChatbotPage.module.css';

const ChatbotPage: React.FC = () => {
  const { storeData, setStoreData } = useContext(GlobalContext);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setStoreData((prev) => ({
      ...prev,
      IsLoading: true,
      CurrentPrompt: message,
      IsWelcomeWindowVisible: false,
      IsChatWindowVisible: true,
    }));

    try {
      const payload = {
        prompt: message,
        session_id: storeData.CurrentSessionID || undefined,
        model: storeData.CurrentModel,
        user_id: storeData.UserDetails?.user_id || 'guest',
      };

      const response = await sendPrompt(payload);

      if (response.status) {
        toast.success('Message sent successfully!');
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setStoreData((prev) => ({
        ...prev,
        IsLoading: false,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          {storeData.IsWelcomeWindowVisible && (
            <WelcomeScreen onSend={handleSendMessage} />
          )}
          {storeData.IsChatWindowVisible && (
            <ChatWindow onSend={handleSendMessage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;

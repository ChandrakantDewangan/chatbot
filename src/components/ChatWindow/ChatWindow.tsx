import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import ChatMessage from '../ChatMessage/ChatMessage';
import InputBox from '../InputBox/InputBox';
import styles from './ChatWindow.module.css';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  onSend: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onSend }) => {
  const { storeData } = useContext(GlobalContext);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mockMessages: Message[] = [
    {
      id: '1',
      text: 'Hello! How can I assist you today?',
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: '2',
      text: 'I need help understanding React context.',
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: '3',
      text: 'React Context is a way to manage state globally in your application. It allows you to pass data through the component tree without having to pass props down manually at every level. Would you like me to explain how to implement it?',
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mockMessages]);

  return (
    <div className={styles.container}>
      <div className={styles.messagesContainer}>
        <div className={styles.messages}>
          {mockMessages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <InputBox
          onSend={onSend}
          placeholder="Type your message..."
          disabled={storeData.IsLoading}
        />
      </div>
    </div>
  );
};

export default ChatWindow;

import React from 'react';
import ChatMessage1 from './ChatMessage1/ChatMessage1';
import ChatMessage2 from './ChatMessage2/ChatMessage2';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  const selectedVariant = 'variant1';

  if (selectedVariant === 'variant2') {
    return <ChatMessage2 {...props} />;
  }

  return <ChatMessage1 {...props} />;
};

export default ChatMessage;

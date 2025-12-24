import React, { useState, FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from './InputBox1.module.css';

interface InputBox1Props {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const InputBox1: React.FC<InputBox1Props> = ({
  onSend,
  placeholder = 'Type your message...',
  disabled = false,
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
        />
        <button
          type="submit"
          className={styles.sendButton}
          disabled={disabled || !message.trim()}
        >
          <FiSend />
        </button>
      </div>
    </form>
  );
};

export default InputBox1;

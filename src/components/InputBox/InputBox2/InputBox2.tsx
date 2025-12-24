import React, { useState, FormEvent } from 'react';
import { IoSend } from 'react-icons/io5';
import styles from './InputBox2.module.css';

interface InputBox2Props {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const InputBox2: React.FC<InputBox2Props> = ({
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
          <IoSend />
          <span className={styles.buttonText}>Send</span>
        </button>
      </div>
    </form>
  );
};

export default InputBox2;

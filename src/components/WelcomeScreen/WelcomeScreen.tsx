import React from 'react';
import { FiMessageCircle, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';
import InputBox from '../InputBox/InputBox';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onSend: (message: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSend }) => {
  const features = [
    {
      icon: <FiMessageCircle />,
      title: 'Natural Conversations',
      description: 'Engage in human-like dialogue',
    },
    {
      icon: <FiZap />,
      title: 'Lightning Fast',
      description: 'Get instant responses',
    },
    {
      icon: <FiShield />,
      title: 'Secure & Private',
      description: 'Your data is protected',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Always Learning',
      description: 'Continuously improving',
    },
  ];

  const suggestedPrompts = [
    'How can you help me today?',
    'Explain quantum computing in simple terms',
    'Write a creative story about space exploration',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Welcome to AI Assistant</h1>
          <p className={styles.subtitle}>
            Your intelligent companion for productivity and creativity
          </p>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.prompts}>
          <p className={styles.promptsLabel}>Try asking:</p>
          <div className={styles.promptsList}>
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                className={styles.promptButton}
                onClick={() => onSend(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.inputSection}>
        <InputBox onSend={onSend} placeholder="Type your message to get started..." />
      </div>
    </div>
  );
};

export default WelcomeScreen;

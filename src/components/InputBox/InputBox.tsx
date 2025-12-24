import React from 'react';
import InputBox1 from './InputBox1/InputBox1';
import InputBox2 from './InputBox2/InputBox2';

interface InputBoxProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const InputBox: React.FC<InputBoxProps> = (props) => {
  const selectedVariant = 'variant1';

  if (selectedVariant === 'variant2') {
    return <InputBox2 {...props} />;
  }

  return <InputBox1 {...props} />;
};

export default InputBox;

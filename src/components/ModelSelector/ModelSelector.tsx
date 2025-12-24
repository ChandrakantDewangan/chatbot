import React, { useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { GlobalContext } from '../../Context/GlobalContext';
import styles from './ModelSelector.module.css';

const MODELS = [
  { id: 'CapacityGenie', name: 'Capacity Genie' },
  { id: 'GPT-4', name: 'GPT-4' },
  { id: 'Claude', name: 'Claude' },
  { id: 'Gemini', name: 'Gemini' },
];

const ModelSelector: React.FC = () => {
  const { storeData, setStoreData } = useContext(GlobalContext);

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStoreData((prev) => ({
      ...prev,
      CurrentModel: e.target.value,
    }));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Model</label>
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          value={storeData.CurrentModel}
          onChange={handleModelChange}
        >
          {MODELS.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <FiChevronDown className={styles.icon} />
      </div>
    </div>
  );
};

export default ModelSelector;

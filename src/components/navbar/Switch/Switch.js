import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './styles.module.css';

const Switch = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <input
        type='checkbox'
        checked={isDarkMode}
        onChange={toggleTheme}
        id='darkmode-tootle'
        className={styles.switch}
      />
      <label htmlFor='darkmode-tootle' className={styles.switchLabel}></label>
    </div>
  );
};

export default Switch;

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './Layout/Navbar/Navbar';
import './index.css';

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className='container'>
        <Navbar />
      </div>
    </div>
  );
};

export default App;

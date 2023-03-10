import Switch from '../../components/navbar/Switch/Switch';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>Logo</h1>
      <Switch />
    </div>
  );
};

export default Navbar;

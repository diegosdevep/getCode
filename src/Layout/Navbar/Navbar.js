import Logo from '../../components/navbar/Logo/Logo';
import Switch from '../../components/navbar/Switch/Switch';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo title='Get Code' />
        <Switch />
      </div>
    </div>
  );
};

export default Navbar;

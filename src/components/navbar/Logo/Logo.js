import styles from './logo.module.css';

const Logo = ({ title }) => {
  return (
    <>
      <h1 className={styles.logo}>{title}</h1>
    </>
  );
};

export default Logo;

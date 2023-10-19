import styles from './Header.module.css';
import Searchbar from './Searchbar/Serachbar';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      Header
      <Searchbar />
    </header>
  );
};

export default Header;

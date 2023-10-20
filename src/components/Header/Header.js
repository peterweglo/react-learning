import styles from './Header.module.scss';
import Searchbar from './Searchbar/Serachbar';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Searchbar />
    </header>
  );
};

export default Header;

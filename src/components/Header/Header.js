import styles from './Header.module.scss';
import Searchbar from './Searchbar/Serachbar';

const Header = (props) => {
  return (
    <header className={`${styles.header} container`}>
      <Searchbar onSearch={props.onSearch} />
    </header>
  );
};

export default Header;

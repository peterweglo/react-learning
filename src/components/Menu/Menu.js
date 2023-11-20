import styles from './Menu.module.scss';
import AuthContext from '../../context/authContext';
import { useContext } from 'react';

const Menu = () => {
  const auth = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    auth.login();
  };
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <div className={`${styles.menuContainer} breadcrumb`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
        {auth.isAuthenticated ? (
          <li className={styles.menuItem}>
            <a href="#" onClick={logout}>
              Wyloguj
            </a>
          </li>
        ) : (
          <li className={styles.menuItem}>
            <a href="#" onClick={login}>
              Zaloguj
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;

import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={`${styles.menuContainer} container`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href='#'>Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
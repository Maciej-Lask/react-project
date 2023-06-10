import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <i className={styles.navIcon + ' fa fa-tasks'} />
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.navLink
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.navLink
                }
                to="/favorite"
              >
                Favorite
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.navLink
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;

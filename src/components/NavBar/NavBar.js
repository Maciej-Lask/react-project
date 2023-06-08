import styles from './NavBar.module.scss';
import Container from '../Container/Container';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <i className={styles.navIcon + ' fa fa-tasks'} />
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/favorite">
                Favorite
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;

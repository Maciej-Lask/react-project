import styles from '../PageTitle/PageTitle.module.scss';
import Hero from '../Hero/Hero';
import Lists from '../Lists/Lists';
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Lists />
    </div>
  );
};

export default Home;

import styles from '../PageTitle/PageTitle.module.scss';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default Home;

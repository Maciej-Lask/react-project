import styles from '../PageTitle/PageTitle.module.scss';
import PageTitle from '../PageTitle/PageTitle';
const Favorite = () => {
  return (
    <div className={styles.PageTitleContainer}>
      <PageTitle>Favorite</PageTitle>
      <p>lorem ipsum</p>
    </div>
  );
};

export default Favorite;

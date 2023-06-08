import styles from '../PageTitle/PageTitle.module.scss';
import PageTitle from '../PageTitle/PageTitle';
const PageNotFound = () => {
  return (
    <div className={styles.PageTitleContainer}>
      <PageTitle>404 Not Found</PageTitle>
    </div>
  );
};

export default PageNotFound;

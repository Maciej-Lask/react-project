import styles from '../PageTitle/PageTitle.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.PageTitleContainer}>
      <PageTitle>About</PageTitle>
      <p>lorem ipsum</p>
    </div>
  );
};

export default About;

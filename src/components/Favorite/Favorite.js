import styles from '../PageTitle/PageTitle.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllFavoriteCards } from '../../redux/store';
const Favorite = () => {
  const cards = useSelector((state) => getAllFavoriteCards(state));
  return (
    <div className={clsx(styles.PageTitleContainer)}>
      <PageTitle>Favorite</PageTitle>
      {cards.length > 0 ? (
        <ul className={clsx(styles.FavoriteCardsContainer, styles.cards)}>
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} />
          ))}
        </ul>
      ) : (
        <p>No favorite cards</p>
      )}
    </div>
  );
};

export default Favorite;

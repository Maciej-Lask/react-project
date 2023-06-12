import Button from '../Button/Button';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.cards.find((card) => card.id === props.id).isFavorite);
  
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    console.log(props.id);
    dispatch(toggleCardFavorite(props.id));
  };
  const handleRemoveCard = (e) => {
    e.preventDefault();
    console.log("remove card");
    dispatch(removeCard(props.id));
  }
  return (
    <li className={styles.card}>
      {props.title}{' '}
      <div>
      <Button
        onClick={handleToggleFavorite}
        className={isFavorite ? styles.favoriteButton : ''}
      >
        <i className="fa fa-star-o"></i>
      </Button>
      <Button onClick={handleRemoveCard}>
        <i className="fa fa-trash-o"></i>
      </Button>

      </div>
    </li>
  );
};

export default Card;

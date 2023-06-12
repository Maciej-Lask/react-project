import Button from '../Button/Button';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.cards.find((card) => card.id === props.id).isFavorite);
  
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    console.log(props.id);
    dispatch({
      type: 'TOGGLE_CARD_FAVORITE',
      payload: props.id
    })
  };
  return (
    <li className={styles.card}>
      {props.title}{' '}
      <Button
        onClick={handleToggleFavorite}
        className={isFavorite ? styles.favoriteButton : ''}
      >
        <i className="fa fa-star-o"></i>
      </Button>
    </li>
  );
};

export default Card;

import shortid from "shortid";
import { strContains } from '../utils/strContains';

const ADD_CARD = 'app/cards/ADD_CARD';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });
export const toggleCardFavorite = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});


//selectors
export const getFilteredCards = ({ cards, searchQuery }, columnId) => {
  return cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchQuery)
  );
};
export const getAllFavoriteCards = ({ cards }) => {
  return cards.filter((card) => card.isFavorite);
};


const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};

export default cardsReducer
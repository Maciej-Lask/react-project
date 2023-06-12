import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchQuery }, columnId) => {
  return cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchQuery)
  );
};
export const getAllFavoriteCards = ({ cards }) => {
  return cards.filter((card) => card.isFavorite);
};
export const getAllLists = (state) => state.lists;
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = (state, listId) => {
  return state.columns.filter((column) => column.listId === listId);
};
export const getListById = (state, listId) =>
  state.lists.find((list) => list.id === listId);
// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});
export const updateSearchQuery = (payload) => ({
  type: 'UPDATE_SEARCH_QUERY',
  payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload, isFavorite: false }],
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), ...action.payload }],
      };
    case 'TOGGLE_CARD_FAVORITE':
      console.log('TOGGLE_CARD_FAVORITE');
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        )
      };
    case 'UPDATE_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

const UPDATE_SEARCH_QUERY = 'app/searchQuery/UPDATE_SEARCH_QUERY';

export const updateSearchQuery = (payload) => ({
  type: UPDATE_SEARCH_QUERY,
  payload,
});

const searchQueryReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchQueryReducer
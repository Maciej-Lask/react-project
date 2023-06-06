import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { updateSearchQuery } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchQueryState = useSelector((state) => state.searchQuery);
  const [searchQuery, setSearchQuery] = useState(searchQueryState);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(updateSearchQuery(searchQuery));
    },
    [dispatch, searchQuery]
  );

  const handleInputChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  useEffect(() => {
    setSearchQuery(searchQueryState);
  }, [searchQueryState]);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search…"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};


export default SearchForm;

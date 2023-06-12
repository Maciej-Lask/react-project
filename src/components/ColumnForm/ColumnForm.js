import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [title, setValue] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId }));
    setValue('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span className={styles.inputLabel}>Title:</span>
      <TextInput
        type="text"
        value={title}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className={styles.inputLabel}>Icon:</span>
      <TextInput
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};
export default ColumnForm;

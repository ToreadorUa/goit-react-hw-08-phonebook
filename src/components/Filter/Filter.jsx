import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Filter/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <FormControl
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        onChange={handleChange}
        value={filter}
      />
    </>
  );
};

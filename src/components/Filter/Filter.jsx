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
      <label htmlFor="filter">Find contacts by name:</label>
      <FormControl
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </>
  );
};

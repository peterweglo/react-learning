import { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/ThemeContext';
import { useContext } from 'react';

const propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const Searchbar = (props) => {
  const [term, setTerm] = useState('');
  const search = () => {
    // console.log('szukaj', term);
    props.onSearch(term);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };
  const theme = useContext(ThemeContext);
  return (
    <div className="d-flex">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDownHandler}
        className="form-control"
        type="text"
        placeholder="szukaj"
      />

      <button onClick={search} className={`ml-1 btn btn-${theme.color}`}>
        Szukaj
      </button>
    </div>
  );
};

Searchbar.propTypes = propTypes;

export default Searchbar;

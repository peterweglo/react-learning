import { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/ThemeContext';

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
  return (
    <div className='d-flex'>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDownHandler}
        className='form-control'
        type='text'
        placeholder='szukaj'
      />
      <ThemeContext.Consumer>
        {({ theme }) => (
          <button onClick={search} className={`ml-1 btn btn-${theme}`}>
            Szukaj
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

Searchbar.propTypes = propTypes;

export default Searchbar;

import { useState } from 'react';

const Searchbar = () => {
  const [term, setTerm] = useState('');
  const search = () => {
    console.log('szukaj', term);
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

      <button onClick={search} className='ml-1 btn btn-secondary'>
        Szukaj
      </button>
    </div>
  );
};

export default Searchbar;

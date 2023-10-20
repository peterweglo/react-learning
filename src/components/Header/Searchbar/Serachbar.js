const Searchbar = () => {
  return (
    <div className='d-flex'>
      <input
        // style={{ width: 'calc(100% - 20px)' }}
        className='form-control'
        type='text'
        placeholder='szukaj'
      />

      <button className='ml-1 btn btn-secondary'>Szukaj</button>
    </div>
  );
};

export default Searchbar;

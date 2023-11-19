const LoadingIcon = (props) => {
  return (
    <div className='d-flex justify-content-center'>
      <div className={`spinner-border text-${props.theme}`} role='status'>
        <span className='sr-only'></span>
      </div>
    </div>
  );
};

export default LoadingIcon;

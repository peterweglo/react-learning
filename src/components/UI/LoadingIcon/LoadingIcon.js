import ThemeContext from '../../../context/ThemeContext';

const LoadingIcon = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className='d-flex justify-content-center'>
          <div className={`spinner-border text-${theme}`} role='status'>
            <span className='sr-only'></span>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default LoadingIcon;

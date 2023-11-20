import ThemeContext from '../../../context/ThemeContext';
import { useContext } from 'react';

const LoadingIcon = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center">
      <div className={`spinner-border text-${theme.color}`} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingIcon;

import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`text-center m-3 text-${theme.color}`}>Noclegi 2023</div>
  );
};

export default Footer;

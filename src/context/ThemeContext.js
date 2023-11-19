import React from 'react';

const ThemeContext = React.createContext({
  theme: 'primary',
  onClick: () => {},
});

export default ThemeContext;

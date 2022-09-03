import React from 'react';
import './ToggleTheme.css';

const ToggleTheme = (props) => {
  const { theme, setTheme } = props;

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button className='toggle' onClick={() => handleToggle()}>{theme}</button>
    </div>
  );
};

export default ToggleTheme;

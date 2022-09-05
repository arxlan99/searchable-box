import React from 'react';
import PropTypes from 'prop-types';

const Settings = (props) => {
  const { setIsAlwaysOpen, setTheme } = props;

  return (
    <div className="settings__container">
      <div className="settings__container__item">
        <div>Title:</div>
        <input
          type="text"
          placeholder="Enter title"
          defaultValue={'Type to search'}
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </div>

      <div className="settings__container__item">
        <div>Theme:</div>
        <select
          onChange={(e) => {
            setTheme(e.target.value === 'dark' ? true : false);
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="settings__container__item">
        <div>Always Open:</div>
        <input
          defaultChecked
          type="checkbox"
          onChange={(e) => {
            setIsAlwaysOpen(e.target.checked);
          }}
        />
      </div>
    </div>
  );
};

Settings.propTypes = {
  setIsAlwaysOpen: PropTypes.func,
  setTheme: PropTypes.func,
  setTitle: PropTypes.func,
};

export default Settings;

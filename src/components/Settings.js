import React from 'react';

const Settings = () => {
  return (
    <div className="settings__container">
      <div className="settings__container__item">
        <div>Title:</div>
        <input type="text" placeholder="title" />
      </div>

      <div className="settings__container__item">
        <div>Theme:</div>
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="settings__container__item">
        <div>Always Open:</div>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Settings;

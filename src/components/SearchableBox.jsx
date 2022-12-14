import React, { useState, useRef, useEffect } from 'react';
import './Searchable.css';
import PropTypes from 'prop-types';

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const SearchableBox = (props) => {
  const { darkTheme, children, title, alwaysOpen, items } = props;
  const [filteredItems, setFilteredItems] = useState(items);

  let [isOpen, setIsOpen] = useState(alwaysOpen || false);

  const handleFocus = (e) => {
    setIsOpen(true);
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  const handleSearch = (e) => {
    const { value } = e.target;
    const filtered = items.filter(
      (item) => item.name?.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    setFilteredItems(filtered);
  };

  return (
    <div ref={domNode} className={`${darkTheme && 'dark'}`}>
      <input
        onFocus={(e) => handleFocus(e)}
        type="text"
        placeholder={title}
        className="input"
        onChange={(e) => handleSearch(e)}
      />

      <div
        className={`input__content ${
          isOpen || alwaysOpen ? 'visible' : 'hidden'
        }`}
      >
        {children(filteredItems)}
      </div>
    </div>
  );
};

SearchableBox.propTypes = {
  darkTheme: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  alwaysOpen: PropTypes.bool,
  items: PropTypes.array,
};

export default SearchableBox;

import React from 'react';
import './Searchable.css';
import PropTypes from 'prop-types';

const BoxItem = (props) => {
  const { children } = props;
  return (
    <div className="box__item">
      <div className="box__item_title">{children}</div>
    </div>
  );
};

BoxItem.propTypes = {
  children: PropTypes.node,
};

export default BoxItem;

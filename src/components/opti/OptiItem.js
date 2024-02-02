// OptiItem.js
import React from 'react';

const OptiItem = ({ optiItem }) => {
  return (
    <div>
      <h3>{optiItem.title}</h3>
      <p>{optiItem.description}</p>
    </div>
  );
};

export default OptiItem;

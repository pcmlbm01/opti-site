// OptiItem.js
import React from 'react';
import './OptiItem.scss';

const OptiItem = ({ optiItem }) => {
  return (
    <div className="opti-item-container">
      <div className="opti-item-header">
        <p>{optiItem.number}</p>
        <h3>{optiItem.title}</h3>
      </div>
      <p className="opti-item-description">{optiItem.description}</p>
      <div className="opti-item-details">
        <div>
          <p>{optiItem.pricePC}</p>
          <p>{optiItem.priceOPTI}</p>
        </div>
        <div>
          <p>{optiItem.perfPC}</p>
          <p>{optiItem.perfOPTI}</p>
        </div>
        <div>
          <p>{optiItem.resultPC}</p>
          <p>{optiItem.resultOPTI}</p>
        </div>
      </div>
      <p className="opti-item-review">{optiItem.review}</p>
      <img className="opti-item-image" src={optiItem.image} alt={`Image for ${optiItem.title}`} />
    </div>
  );
};

export default OptiItem;

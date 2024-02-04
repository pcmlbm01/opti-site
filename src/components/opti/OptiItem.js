// OptiItem.js
import React from 'react';
import './OptiItem.scss';

const OptiItem = ({ optiItem }) => {
  return (
    <div className="opti-item-container">
      <div className="opti-item-header">
        <p><i class="fa-solid fa-gamepad"></i>{optiItem.title}</p>
        <p><i class="fa-solid fa-hashtag"></i>{optiItem.number}</p>
      </div>
      <p className="opti-item-description"><i class="fa-solid fa-fire-flame-curved"></i>{optiItem.description}</p>
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
      <div className='opti-item-other'>
        <p className="opti-item-step"><i class="fa-solid fa-forward-step"></i>{optiItem.step}</p>
        <p className="opti-item-review"><i class="fa-solid fa-comment"></i>{optiItem.review}</p>
        <p className="opti-item-image"><i class="fa-solid fa-image"></i>{optiItem.image}</p>
      </div>
    </div>
  );
};

export default OptiItem;

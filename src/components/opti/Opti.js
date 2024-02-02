// Opti.js
import React from 'react';
import OptiItem from './OptiItem';
import optiData from '../../data/optiData';

const Opti = () => {
  return (
    <div className='opti-item'>
      <h2>Opti</h2>
      <div className='opti-list-item'>
        {optiData.map(optiItem => (
          <OptiItem key={optiItem.id} optiItem={optiItem} />
        ))}
      </div>
    </div>
  );
};

export default Opti;

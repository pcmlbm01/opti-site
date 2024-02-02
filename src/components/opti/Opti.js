// Services.js
import React from 'react';
import OptiItem from './OptiItem';
import optiData from '../../data/optiData';
import './Opti.scss';

const Services = () => {
  return (
    <div>
      <h2>Opti</h2>
      {optiData.map(optiItem => (
        <OptiItem key={optiItem.id} optiItem={optiItem} />
      ))}
    </div>
  );
};

export default Services;

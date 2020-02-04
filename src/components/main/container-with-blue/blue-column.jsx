import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import circle from '../../png/circle.png';
import Arrow from '../../png/arrow.png';

export const BlueColumn = ({ text1, text2 }) => (
  <div className="column-in-blue-container">
    <img src={circle} alt="circle" className="circle" />
    <div className="text-in-blue-container">
      <div className="header-in-blue-column">{text1}</div>
      <div className="main-text-in-blue-column">{text2}</div>
      <div className="text-and-arrow-in-blue-column">
        <div className="text-before-arrow">Read More</div>
        <div className="arrow">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  </div>
);

BlueColumn.propTypes = {
  text1: PropTypes.node.isRequired,
  text2: PropTypes.node.isRequired,
};


import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import circle from '../../png/circle.png';
import Arrow from '../../png/arrow.png';

export const BlueColumn = ({ text1, text2, text3 }) => (
  <div className="rowInBlue">
    <img src={circle} alt="circle" className="circle" />
    <div className="text">
      <img src={text1} alt="circle" />
      <img src={text2} alt="circle" />
      <div className="textAndArrow">
        <div className="textArrow">
          <img src={text3} alt="circle" />
        </div>
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
  text3: PropTypes.node.isRequired,
};


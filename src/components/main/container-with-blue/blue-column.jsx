import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import circle from '../../png/circle.png';
import Arrow from '../../png/arrow.png';

export const BlueColumn = ({ text1, text2 }) => (
  <div className="rowInBlue">
    <img src={circle} alt="circle" className="circle" />
    <div className="textInBlue">
      <div className="rowInBlueTextPartOne">{text1}</div>
      <div className="rowInBlueTextPartTwo">{text2}</div>
      <div className="textAndArrow">
        <div className="textArrow">Read More</div>
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


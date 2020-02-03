import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import data from '../../png/data.png';
import Arrow from '../../png/littleArrow.png';

export const Calendar = ({ text1, text2, text3 }) => (
  <div className="row">
    <div className="data"><img src={data} alt="data" /></div>
    <div className="textForData">
      <div className="headerTextCalendar">{text1}</div>
      <div className="commentsForData">{text2}</div>
      <div className="textUnderComments">
        {text3}
        <button type="button" className="arrow">
          <img src={Arrow} alt="arrow" />
        </button>

      </div>
    </div>
  </div>
);

Calendar.propTypes = {
  text1: PropTypes.node.isRequired,
  text2: PropTypes.node.isRequired,
  text3: PropTypes.node.isRequired,
};

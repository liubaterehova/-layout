import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import data from '../../png/data.png'; // TODO: Same
import Arrow from '../../png/littleArrow.png'; // TODO: Same

export const PartWithCalendar = ({ text1, text2, text3 }) => ( // TODO: Same
  <div className="card-with-calendar">
    <div><img src={data} alt="data" /></div>
    <div className="text-in-card-conteiner">
      <div className="header-in-card">{text1}</div>
      <div className="number-of-comments-in-card">{text2}</div>
      <div className="main-text-in-card">
        {text3}
        <button type="button" className="button-image-arrow-in-card">
          <img src={Arrow} alt="arrow" />
        </button>

      </div>
    </div>
  </div>
);

PartWithCalendar.propTypes = {
  text1: PropTypes.node.isRequired,
  text2: PropTypes.node.isRequired,
  text3: PropTypes.node.isRequired,
};

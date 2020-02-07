import React from 'react';
import PropTypes from 'prop-types';

import './container-with-calendar.scss';

export const PartWithCalendar = ({ title, numberAndComments, description }) => ( // TODO: Same
  <div className="card-with-calendar">
    <div className="date-img" />
    <div className="text-in-card-conteiner">
      <div className="header-in-card">{title}</div>
      <div className="number-of-comments-in-card">{numberAndComments}</div>
      <div className="main-text-in-card">
        {description}
        <button type="button" className="button-image-arrow-in-card">
          <div className="arrow" />
        </button>

      </div>
    </div>
  </div>
);

PartWithCalendar.propTypes = {
  title: PropTypes.node.isRequired,
  numberAndComments: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

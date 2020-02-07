import React from 'react';
import PropTypes from 'prop-types';

import './container-with-blue-bg.scss';

export const BlueColumn = ({ title, label }) => ( // TODO: text1 ? Don't write that
  <div className="column-in-blue-container">
    {/* <div className="div-for-image-circle"> */}
    <div className="circle-in-blue-container" />
    {/* </div> */}
    <div className="text-in-blue-container">
      <div className="header-in-blue-column">{title}</div>
      <div className="main-text-in-blue-column">{label}</div>
      <div className="text-and-arrow-in-blue-column">
        <div className="text-before-arrow">Read More</div>
        <div className="arrow" />
      </div>
    </div>
  </div>
);

BlueColumn.propTypes = {
  title: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
};


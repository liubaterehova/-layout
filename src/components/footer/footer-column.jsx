import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const FooterColumn = ({ firstRow, secondRow }) => (
  <div className="rows">
    <div className="headerInFooter">{firstRow}</div>
    <div className="textAfterHeader">{secondRow}</div>
  </div>
);

FooterColumn.propTypes = {
  firstRow: PropTypes.node.isRequired,
  secondRow: PropTypes.node.isRequired,
};

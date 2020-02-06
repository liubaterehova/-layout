import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

export const FooterColumn = ({ firstRow, secondRow }) => (
  <div className="column-in-footer">
    <div className="header-in-footer-column">{firstRow}</div>
    <div className="main-text-in-footer-column">{secondRow}</div>
  </div>
);

FooterColumn.propTypes = {
  firstRow: PropTypes.node.isRequired,
  secondRow: PropTypes.node.isRequired,
};

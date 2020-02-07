import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './container-with-guys.scss';

export const PersonCard = ({
  sex, title, label,
}) =>
  (
    <div className="person-in-container-guys">
      <div className={ClassNames('person-photo-in-container-guys', sex)} />
      <div className="text-near-photo-container">
        <div className="text-near-photo-header">{title}</div>
        <div className="text-near-photo-main-part">{label}</div>
        <div>
          <input type="button" className="button-for-guys-container" value="More" />
        </div>
      </div>
    </div>
  );

PersonCard.propTypes = {
  sex: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
};

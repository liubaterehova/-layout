import React from 'react';
import PropTypes from 'prop-types';

import './container-with-guys.scss';

export const PersonCard = ({
  photo, altForPhoto, text1, text2,
}) =>
  (
    <div className="person-in-container-guys">
      <div className="person-photo-in-container-guys">
        <img src={photo} alt={altForPhoto} className="photo-in-container-guys" />
      </div>
      <div className="text-near-photo-container">
        <div className="text-near-photo-header">{text1}</div>
        <div className="text-near-photo-main-part">{text2}</div>
        <div>
          <input type="button" className="button-for-guys-container" value="More" />
        </div>
      </div>
    </div>
  );

PersonCard.propTypes = {
  photo: PropTypes.node.isRequired,
  altForPhoto: PropTypes.node.isRequired,
  text1: PropTypes.node.isRequired,
  text2: PropTypes.node.isRequired,
};

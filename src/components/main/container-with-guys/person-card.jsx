import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const PersonCard = ({
  photo, altForPhoto, text1, text2,
}) =>
  (
    <div className="person">
      <div>
        <img src={photo} alt={altForPhoto} />
      </div>
      <div className="textNearPhoto">
        <div className="personText">{text1}</div>
        <div className="personText2">{text2}</div>
        <div>
          <input type="button" className="button" value="More" />
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

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const PersonCard = ({
  photo, altForPhoto, text1, text2,
}) =>
  (
    <div className="person-in-conteiner-guys">
      <div>
        <img src={photo} alt={altForPhoto} className="photo-in-conteiner-guys" />
      </div>
      <div className="text-near-photo-conteiner">
        <div className="tex-near-photo-first-part">{text1}</div>
        <div className="tex-near-photo-second-part">{text2}</div>
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

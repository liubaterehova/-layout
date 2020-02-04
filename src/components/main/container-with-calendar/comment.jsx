import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import circleMessage from '../../png/circleMessage.png';

export const PartWithComment = ({ text1, author }) => (
  <div className="card-with-comments">
    <div className="text-in-card-with-comment">
      <div className="main-text-in-card-with-comment">{text1}</div>
      <div className="author-in-card-with-comment">{author}</div>
    </div>
    <div className="message-image-in-card-with-comment"><img src={circleMessage} alt="msg" className="img-circle-in-comment-card" /></div>
  </div>
);

PartWithComment.propTypes = {
  text1: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

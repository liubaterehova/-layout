import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import circleMessage from '../../png/circleMessage.png';

export const Comment = ({ text1, author }) => (
  <div className="blockComment">
    <div className="textComment">
      <div className="text">{text1}</div>
      <div className="author">{author}</div>
    </div>
    <div className="message"><img src={circleMessage} alt="msg" className="circle-in-comment" /></div>
  </div>
);

Comment.propTypes = {
  text1: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import './container-with-calendar.scss';

export const PartWithComment = ({ description, author }) => (
  <div className="card-with-comments">
    <div className="text-in-card-with-comment">
      <div className="main-text-in-card-with-comment">{description}</div>
      <div className="author-in-card-with-comment">{author}</div>
    </div>
    <div className="message-image-in-card-with-comment" />
  </div>
);

PartWithComment.propTypes = {
  description: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

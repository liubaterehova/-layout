import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

import { Menu } from './menu';

export const Header = ({ isModalShow, toggleModal }) => (
  <div className="header">
    <div className="plane-image" />
    <div className="icon-logo" />
    <Menu isModalShow={isModalShow} toggleModal={toggleModal} />
  </div>
);

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isModalShow: PropTypes.bool.isRequired,
};

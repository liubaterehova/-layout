import React from 'react';
import PropTypes from 'prop-types';

import './header.scss'; // TODO: Please, use styles import after all imports
// TODO: It would be better if you use background-imgae: url();
// TODO: same

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

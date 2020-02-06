import React from 'react';
import PropTypes from 'prop-types';

import './header.scss'; // TODO: Please, use styles import after all imports

import Iconlogo from '../png/logo.png'; // TODO: It would be better if you use background-imgae: url();
import IconPlane from '../png/plane.png'; // TODO: same

import { Menu } from './menu';

export const Header = ({ isModalShow, toggleModal }) => (
  <div className="header">
    <div className="plane-image">
      <img src={IconPlane} alt="plane" />
    </div>
    <div>
      <img src={Iconlogo} alt="Logo" />
    </div>
    <Menu isModalShow={isModalShow} toggleModal={toggleModal} />
  </div>
);

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isModalShow: PropTypes.bool.isRequired,
};

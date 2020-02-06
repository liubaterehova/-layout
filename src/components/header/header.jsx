import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; // TODO: Please, use styles import after all imports
import Iconlogo from '../png/logo.png'; // TODO: It would be better if you use background-imgae: url();
import IconPlane from '../png/plane.png'; // TODO: same
import { Menu } from './menu';

export const Header = ({ changeScroll }) => (
  <div className="header">
    <div className="plane-image"><img src={IconPlane} alt="plane" /></div>
    <div>
      <img src={Iconlogo} alt="Logo" />
    </div>
    <Menu changeScroll={changeScroll} />
  </div>
);

Header.propTypes = {
  changeScroll: PropTypes.func.isRequired,
};

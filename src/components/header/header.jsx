import React from 'react';
import './style.scss';
import Iconlogo from '../png/logo.png';
import IconPlane from '../png/plane.png';
import { Menu } from './menu';
import menuforphone from '../png/menuAdaptive.png';

export const Header = () => (
  <div className="header">
    <div className="plane-image"><img src={IconPlane} alt="plane" /></div>
    <div>
      <img src={Iconlogo} alt="Logo" />
    </div>
    <div className="div-menu-in-screen-for-phone">
      <img src={menuforphone} alt="menu" className="menu-img" />
    </div>
    <Menu />
  </div>
);

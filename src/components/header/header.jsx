import React from 'react';
import './style.scss';
import Iconlogo from '../png/logo.png';
import IconPlane from '../png/plane.png';
import { Menu } from './menu';

export const Header = () => (
  <div className="header ">
    <div className="plane"><img src={IconPlane} alt="plane" /></div>
    <div className="textHeader">
      <img src={Iconlogo} alt="Logo" />
    </div>
    <Menu />
  </div>
);

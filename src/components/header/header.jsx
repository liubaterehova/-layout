import React from 'react';
import './style.scss';
import Iconlogo from '../png/logo.png';
import IconMenu from '../png/menu.png';
import IconPlane from '../png/plane.png';

export const Header = () => (
  <div className="header ">
    <div className="plane"><img src={IconPlane} alt="plane" /></div>
    <div className="textHeader">
      <img src={Iconlogo} alt="Logo" />
    </div>
    <div className="menu">
      <img src={IconMenu} alt="Menu" />
    </div>
  </div>
);

import React from 'react';
import './style.css';
import Iconlogo from '../png/logo.png';
import IconlogoSecondPart from '../png/logo2.png';
import IconMenu from '../png/menu.png';

export const Header = () => (
  <div className="header ">
    <div className="textHeader">
    <img src={Iconlogo} alt="Logo" />;
    <img src={IconlogoSecondPart} alt="Logo2" />;
    </div>
    <div className='menu'>
      <img src={IconMenu} alt='Menu'></img>
    </div>
  </div>
);

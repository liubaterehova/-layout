import React, { useState } from 'react';
import './style.scss';
import menuforphone from '../png/menuAdaptive.png';

export const Menu = () => {
  const [visibleMenu, changeVisibleMenu] = useState('menu-in-big-screen');
  const [visibleStick, hideStick] = useState('');
  const [mainMenu, changemainMenu] = useState('');

  const changeVisibility = () => {
    if (visibleMenu === 'menu-in-big-screen') {
      changeVisibleMenu('show-menu');
      hideStick('stick-for-phone-screen');
      changemainMenu('menu-layout');
    } else {
      changeVisibleMenu('menu-in-big-screen');
      changemainMenu('');
      hideStick('');
    }
  };

  return (
    <div className={`menu ${mainMenu}`}>
      <div className="div-for-button-menu">
        <button type="button" onClick={changeVisibility} className="button-for-show-menu">
          <img src={menuforphone} alt="menu" className="menu-img" />
        </button>
      </div>
      <div className={visibleMenu}>
        <div className="point-menu active-tab-menu">Home</div>
        <div className={visibleStick}>|</div>
        <div>About</div><div className={visibleStick}>|</div>
        <div>Services</div><div className={visibleStick}>|</div>
        <div>Portfolio</div><div className={visibleStick}>|</div>
        <div>Contract</div>
      </div>
    </div>
  );
};

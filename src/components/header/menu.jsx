import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'; // TODO:
import menuforphone from '../png/menuAdaptive.png'; // TODO:

export const Menu = ({ changeScroll }) => {
  const [visibleMenu, changeVisibleMenu] = useState('menu-in-big-screen'); // TODO: It not necessary
  const [visibleStick, hideStick] = useState(''); // TODO: It not necessary
  const [mainMenu, changeMenuFromMobileToDestop] = useState(''); // TODO: It not necessary

  const body = document.getElementsByTagName('body')[0]; // TODO: Really ?)))
  const changeVisibility = () => { // TODO:
    if (visibleMenu === 'menu-in-big-screen') {
      changeVisibleMenu('show-menu');
      hideStick('stick-for-phone-screen');
      changeMenuFromMobileToDestop('menu-with-overlay');
      changeScroll('no-scroll');
      body.classList.add('no-scroll');
    } else {
      changeVisibleMenu('menu-in-big-screen');
      changeMenuFromMobileToDestop('');
      hideStick('');
      body.classList.remove('no-scroll');
      changeScroll('');
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
        {/* TODO: Why do you use this ? */}
        <div className={visibleStick}>|</div>
        <div>About</div><div className={visibleStick}>|</div>
        <div>Services</div><div className={visibleStick}>|</div>
        <div>Portfolio</div><div className={visibleStick}>|</div>
        <div>Contract</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  changeScroll: PropTypes.func.isRequired,
};

import React from 'react';
import "./style.css";
import siteName from './images/siteName.svg';

const Header = () => {
  return <div className='header'>
    <div className='Paper_plane'>
      <div className='left_wing'></div>
      <div className='inside'></div>
      <div className='right_wing'></div>
      <div className='bottom_dark'></div>
    </div>
   
    <div className='site_name'>Site Name</div>
    </div>
}

export default Header;
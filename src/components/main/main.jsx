import React from 'react';
import './style.css';
import { IconLogo } from '../icons/iconLogo';

export const Main = () => (
  <div className="header">
    <div className="telegram">
      <div className="left_wing" />
      <div className="inside" />
      <div className="right_wing" />
      <div className="bottom_dark" />
    </div>
    <div className="textHeader">
      <IconLogo />

    </div>
  </div>
);

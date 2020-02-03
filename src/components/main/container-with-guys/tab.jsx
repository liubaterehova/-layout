import React from 'react';
import './style.scss';
import Arrows from '../../png/fiveArrows.png';

export const Tab = () => (
  <div className="menuTab">
    <div className="tableUpperPart">
      <div>
        <button type="button" className="tab active"><span className="tabActive">Eronped</span></button>
        <button type="button" className="tab nonActive"><span className="tabNonActive">Centro</span></button>
      </div>
      <div className="tabletext">
        <div className="sedeginText">Sedegin libero commma</div>
        <div className="simalesText">Simasellus ultrices nulla quis nibh Quisque a lectus Donec consectutuer ligula vulputate sem tristique sem tris</div>
      </div>
    </div>
    <div className="tableDownPart" />
    <div className="list">
      <div className="arrows"><img src={Arrows} alt="arrows" /></div>
      <div>
        <ul>
          <li>Cras ornare tristique elit  sinto sum</li>
          <div className="hrForLi" />
          <li>Integer vitae libero ac risus egestas</li>
          <div className="hrForLi" />
          <li>Vestibulum commodo felis quis tortor</li>
          <div className="hrForLi" />
          <li>Donec quis dui at dolor tempor interd</li>
          <div className="hrForLi" />
          <li>Fusce lobortis lorem at ipsum semper</li>
        </ul>
      </div>
    </div>
  </div>
);

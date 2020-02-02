import React from 'react';
import './style.scss';

export const Tab = () => (
  <div className="menuTab">
    <div className="tableUpperPart">
      <div className="tabs">
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
      <ul>
        <li>Cras ornare tristique elit  sinto sum</li>
        <li>Integer vitae libero ac risus egestas</li>
        <li>Vestibulum commodo felis quis tortor</li>
        <li>Donec quis dui at dolor tempor interd</li>
        <li>Fusce lobortis lorem at ipsum semper</li>
      </ul>
    </div>
  </div>
);

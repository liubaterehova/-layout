import React from 'react';
import './style.scss';
import Arrows from '../../png/fiveArrows.png';

export const SelectTab = () => (
  <div className="select-tab-conteiner">
    <div className="select-tab-upper-part">
      <div>
        <button type="button" className="tab-active">Eronped</button>
        <button type="button" className="tab-no-active">Centro</button>
      </div>
      <div className="text-in-selected-tab-conteiner">
        <div className="header-in-selected-tab">Sedegin libero commma</div>
        <div className="main-text-in-selected-tab">Simasellus ultrices nulla quis nibh Quisque a lectus Donec consectutuer ligula vulputate sem tristique sem tris</div>
      </div>
    </div>
    <div className="select-tab-down-part">
      <div className="arrows-imgs-in-down-part"><img src={Arrows} alt="arrows" className="image-arrow" /></div>
      <div>
        <ul>
          <li>Cras ornare tristique elit  sinto sum</li>
          <div className="hr-in-down-part" />
          <li>Integer vitae libero ac risus egestas</li>
          <div className="hr-in-down-part" />
          <li>Vestibulum commodo felis quis tortor</li>
          <div className="hr-in-down-part" />
          <li>Donec quis dui at dolor tempor interd</li>
          <div className="hr-in-down-part" />
          <li>Fusce lobortis lorem at ipsum semper</li>
        </ul>
      </div>
    </div>
  </div>
);

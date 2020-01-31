import React from 'react';
import './style.scss';
import woman from '../../png/tetka.png';
import man from '../../png/mushik.png';
import textForWoman from '../../png/textTetka.png';
import textForWoman2 from '../../png/textTetka2.png';
import textForMan from '../../png/textMushik.png';

export const ContainerWithGuys = () => (
  <div className="containerForGuys">
    <div className="people">
      <div className="woman">
        <div className="photo">
          <img src={woman} alt="woman" />
        </div>
        <div className="textNearPhoto">
          <div>
            <img src={textForWoman} alt="woman" />
          </div>
          <div>
            <img src={textForWoman2} alt="woman" />
          </div>
          <div>
            <input type="button" className="button" value="More" />
          </div>
        </div>
      </div>
      <div className="man">
        <div className="photo">
          <img src={man} alt="man" />
        </div>
        <div className="textNearPhoto">
          <img src={textForMan} alt="man" />
          <img src={textForWoman2} alt="man" />
          <input type="button" className="button" value="More" />
        </div>
      </div>
    </div>

    <div className="table">
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
  </div>
);


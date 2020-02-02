import React from 'react';
import './style.scss';
import woman from '../../png/tetka.png';
import man from '../../png/mushik.png';
import textForWoman from '../../png/textTetka.png';
import textForWoman2 from '../../png/textTetka2.png';
import textForMan from '../../png/textMushik.png';
import { PersonCard } from './person-card';
import { Tab } from './tab';

export const ContainerWithGuys = () => (
  <div className="containerForGuys">
    <div className="people">
      <PersonCard
        sex="woman"
        photo={woman}
        altForPhoto="woman"
        text1={textForWoman}
        text2={textForWoman2}
      />
      <PersonCard
        sex="man"
        photo={man}
        altForPhoto="man"
        text1={textForMan}
        text2={textForWoman2}
      />
    </div>

    <div className="table">
      <Tab />
    </div>
  </div>
);

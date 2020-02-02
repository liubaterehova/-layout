import React from 'react';
import './style.scss';
import ausceText from '../../png/ausceText.png';
import vestibul from '../../png/vestibul.png';
import cras from '../../png/cras.png';
import auscePartTwo from '../../png/auscePartTwo.png';
import readMore from '../../png/readMore.png';
import vestibulPartTwo from '../../png/vestibulPartTwo.png';
import crasPartTwo from '../../png/crasPartTwo.png';
import { BlueColumn } from './blue-column';

export const ContainerWithBlue = () => (
  <div className="containerWithBlue">
    <BlueColumn
      text1={ausceText}
      text2={auscePartTwo}
      text3={readMore}
    />
    <BlueColumn
      text1={vestibul}
      text2={vestibulPartTwo}
      text3={readMore}
    />
    <BlueColumn
      text1={cras}
      text2={crasPartTwo}
      text3={readMore}
    />
  </div>

);

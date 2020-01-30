import React from 'react';
import './style.css';
import circle from '../../png/circle.png';
import ausceText from '../../png/ausceText.png';
import vestibul from '../../png/vestibul.png';
import cras from '../../png/cras.png';
import auscePartTwo from '../../png/auscePartTwo.png';
import readMore from '../../png/readMore.png';
import vestibulPartTwo from '../../png/vestibulPartTwo.png';
import crasPartTwo from '../../png/crasPartTwo.png';

export const ContainerWithBlue = () => (
    <div className='containerWithBlue'>
      <div className='row'>
      <img src={circle} alt='circle' className='circle'></img>
        <div className='text'>
          <img src={ausceText} alt='circle' ></img>
          <img src={auscePartTwo} alt='circle'></img>
          <img src={readMore} alt='circle'></img>
        </div>
        </div>
        <div className='row'>
        <img src={circle} alt='circle' className='circle'></img>
        <div className='text'>
        <img src={vestibul} alt='circle'></img>
        <img src={vestibulPartTwo} alt='circle'></img>
        <img src={readMore} alt='circle'></img>
        </div>
        </div>
        <div className='row'>
        <img src={circle} alt='circle' className='circle'></img>
          <div className='text'>
        <img src={cras} alt='circle'></img>
        <img src={crasPartTwo} alt='circle'></img>
        <img src={readMore} alt='circle'></img>
      </div>
        </div>
        </div>

)
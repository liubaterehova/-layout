import React from 'react';
import './style.css';
import phone from '../../png/phone.png';
import firstPartPhoneText from '../../png/firstPartPhoneText.png';
import secondPartPhoneText from '../../png/secondPartPhoneText.png';
import button from '../../png/buttonMoreInfo.png';

export const ContainerWithPhone = () => (
  <div className="containerForPhone">
    <div className='phoneImg'>
    <img src={phone} alt='phone' className='phone'></img>
    </div>
    <div className='textImg'>
    <img src={firstPartPhoneText} alt='phone' className='textImg'></img>
    <img src={secondPartPhoneText} alt='phone' className='textImg'></img>
    <button className='button'><img src={button} alt='phone'></img></button>
    </div>
  </div>
);

import React from 'react';
import './style.css';
import phone from '../../png/phone.png';
import firstPartPhoneText from '../../png/firstPartPhoneText.png';
import secondPartPhoneText from '../../png/secondPartPhoneText.png';
import button from '../../png/buttonMoreInfo.png';

export const ContainerWithPhone = () => (
  <div className="containerForPhone">
    <div className="phoneImg">
      <img src={phone} alt="phone" className="phone" />
    </div>
    <div className="textImg">
      <img src={firstPartPhoneText} alt="phone" className="textImg" />
      <img src={secondPartPhoneText} alt="phone" className="textImg" />
      <button type="button" className="button"><img src={button} alt="phone" /></button>
    </div>
  </div>
);

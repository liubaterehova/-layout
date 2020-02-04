import React from 'react';
import './style.scss';
import phone from '../../png/phone.png';
import button from '../../png/buttonMoreInfo.png';

export const ContainerWithPhone = () => (
  <div className="containerForPhone">
    <div className="phoneImg">
      <img src={phone} alt="phone" className="phone" />
    </div>
    <div className="textNearPhone">
      <div className="textNearPhoneFirstPart">Lorem ipsum dolor sit amet</div>
      <div className="textNearPhoneSecondPart">Donec nec justo eget</div>
      <div className="textNearPhoneThirdPart">Morbi in sem quis dui placerat ornare. Pellentesque odio<br />
      euismod in, pharetra a, ultricies in, diam.
      </div>
      <button type="button" className="button">
        <span className="text-in-button-phone">MORE INFO</span>
      </button>
    </div>
  </div>
);

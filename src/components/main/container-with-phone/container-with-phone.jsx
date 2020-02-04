import React from 'react';
import './style.scss';
import phone from '../../png/phone.png';
import button from '../../png/buttonMoreInfo.png';

export const ContainerWithPhone = () => (
  <div className="container-for-phone">
    <div>
      <img src={phone} alt="phone" className="phone-img" />
    </div>
    <div className="text-near-phone-conteiner">
      <div className="text-near-phone-first-part">Lorem ipsum dolor sit amet</div>
      <div className="text-near-phone-second-part">Donec nec justo eget</div>
      <div className="text-near-phone-third-part">Morbi in sem quis dui placerat ornare. Pellentesque odio<br />
      euismod in, pharetra a, ultricies in, diam.
      </div>
      <button type="button" className="button">
        <span className="text-in-button-phone">MORE INFO</span>
      </button>
    </div>
  </div>
);

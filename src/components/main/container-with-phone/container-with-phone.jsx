import React from 'react';

import './container-with-phone.scss';

import phone from '../../png/phone.png'; // TODO: Please, use backgroun-image: url()
import button from '../../png/buttonMoreInfo.png'; // TODO: Please, use backgroun-image: url()

export const ContainerWithPhone = () => (
  <div className="container-for-phone">
    <div>
      <img src={phone} alt="phone" className="phone-img" />
    </div>
    <div className="text-near-phone-conteiner">
      <div className="text-near-phone-label">Lorem ipsum dolor sit amet</div>
      <div className="text-near-phone-title">Donec nec justo eget</div>
      <div className="text-near-phone-description">Morbi in sem quis dui placerat ornare. Pellentesque odio<br /> {/* It not necessary */}
        euismod in, pharetra a, ultricies in, diam.
      </div>
      <button type="button" className="button">
        <span className="text-in-button-phone">MORE INFO</span>
      </button>
    </div>
  </div>
);

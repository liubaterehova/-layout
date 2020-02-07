import React from 'react';

import './container-with-phone.scss';

export const ContainerWithPhone = () => (
  <div className="container-phone">
    <div className="phone-img" />
    <div className="text-near-phone-conteiner">
      <div className="text-near-phone-label">Lorem ipsum dolor sit amet</div>
      <div className="text-near-phone-title">Donec nec justo eget</div>
      <div className="text-near-phone-description">Morbi in sem quis dui placerat ornare. Pellentesque odio euismod in, pharetra a, ultricies in, diam.
      </div>
      <button type="button" className="button">
        <span className="text-in-button-phone">MORE INFO</span>
      </button>
    </div>
  </div>
);

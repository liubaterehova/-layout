import React from 'react';
import facebook from '../png/fb.png';
import twitter from '../png/twitter.png';
import './style.scss';

export const CiteInfo = () => (
  <div className="cite-info-footer-container">
    <div className="hr-footer-container" />
    <div className="cite-info">
      <div className="cite-name">© Sitename. All rights Reserved. Designed By www.alltemplateneeds.com   /    Photos from : www.photorack.net</div>
      <div className="social-network-in-footer"><img src={facebook} alt="fb" /></div>
      <div className="social-network-in-footer"><img src={twitter} alt="twitter" /></div>
    </div>
  </div>
);

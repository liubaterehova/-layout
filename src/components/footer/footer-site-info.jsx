import React from 'react';

import facebook from '../png/fb.png';
import twitter from '../png/twitter.png';

import './footer.scss';

export const SiteInfo = () => (
  <div className="site-info-footer-container">{/* TODO: */}
    <div className="hr-footer-container" />
    <div className="site-info">
      <div className="site-name">© Sitename. All rights Reserved. Designed By www.alltemplateneeds.com   /    Photos from : www.photorack.net</div>
      <div className="social-network-in-footer">
        <img src={facebook} alt="fb" />
      </div>
      <div className="social-network-in-footer"><img src={twitter} alt="twitter" /></div>
    </div>
  </div>
);

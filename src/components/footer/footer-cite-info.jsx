import React from 'react';
import facebook from '../png/fb.png';
import twitter from '../png/twitter.png';
import './style.scss';

export const CiteInfo = () => (
  <div>
    <div className="hr" />
    <div className="end">
      <div className="allRights">© Sitename. All rights Reserved. Designed By www.alltemplateneeds.com   /    Photos from : www.photorack.net</div>
      <div className="fb">
        <div><img src={facebook} alt="fb" /></div>
        <div><img src={twitter} alt="twitter" /></div>
      </div>
    </div>
  </div>
);

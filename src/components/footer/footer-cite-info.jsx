import React from 'react';
import facebook from '../png/fb.png';
import twitter from '../png/twitter.png';
import './style.scss';

export const CiteInfo = () => (
  <div className="citeInfo">
    <div className="hr" />
    <div className="footerSecondPart">
      <div className="allRights">© Sitename. All rights Reserved. Designed By www.alltemplateneeds.com   /    Photos from : www.photorack.net</div>
      <div className="socialNetwork"><img src={facebook} alt="fb" /></div>
      <div className="socialNetwork"><img src={twitter} alt="twitter" /></div>
    </div>
  </div>
);

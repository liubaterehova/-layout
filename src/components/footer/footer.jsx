import React from 'react';
import './style.scss';
import facebook from '../png/fb.png';
import twitter from '../png/twitter.png';

export const Footer = () => (
  <div className="containerForFooter">
    <div className="upperPart">

      <div className="rows">
        <div className="headerInFooter">Vitae lin</div>
        <div className="textAfterHeader">Phasellus ultrices<br />
Sed adipiscing lipsum
Nulla sed leoniton
        </div>
      </div>

      <div className="rows">
        <div className="headerInFooter">Luctrus</div>
        <div className="textAfterHeader">Lorem ipsum<br />Donec nec justo<br />
Morbi in se
        </div>
      </div>

      <div className="rows">
        <div className="headerInFooter">Consetu</div>
        <div className="textAfterHeader">Quisque a lectus<br />
Donec consecte<br />
Nulla sed leoniton
        </div>
      </div>

      <div className="rows">
        <div className="headerInFooter">Vitae lin</div>
        <div className="textAfterHeader">Phasellus ultrices<br />
Sed adipiscing lipsum<br />
Nulla sed leoniton
        </div>
      </div>

      <div className="rows">
        <div className="headerInFooter">Luctrus</div>
        <div className="textAfterHeader">Lorem ipsum<br />
Donec nec justo<br />
Morbi in se
        </div>
      </div>

      <div className="rows">
        <div className="headerInFooter">Consetu</div>
        <div className="textAfterHeader">Quisque a lectus<br />
Donec consecte<br />
Nulla sed leoniton
        </div>
      </div>
    </div>
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

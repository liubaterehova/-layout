import React from 'react';
import './style.scss';
import { FooterColumn } from './footer-column';
import { CiteInfo } from './footer-cite-info';

export const Footer = () => (
  <div className="container-for-footer">
    <div className="upper-part-footer-container">

      <FooterColumn
        firstRow="Vitae lin"
        secondRow={(
          <div>hasellus ultrices<br />
            Sed adipiscing lipsum<br />
            Nulla sed leoniton
          </div>
        )}
      />

      <FooterColumn
        firstRow="Luctrus"
        secondRow={(
          <div>Lorem ipsum<br />Donec nec justo<br />
            Morbi in se
          </div>
        )}
      />

      <FooterColumn
        firstRow="Consetu"
        secondRow={(
          <div>Quisque a lectus<br />
            Donec consecte<br />
            Nulla sed leoniton
          </div>
        )}
      />

      <FooterColumn
        firstRow="Vitae lin"
        secondRow={(
          <div>hasellus ultrices<br />
            Sed adipiscing lipsum<br />
            Nulla sed leoniton
          </div>
        )}
      />

      <FooterColumn
        firstRow="Luctrus"
        secondRow={(
          <div>Lorem ipsum<br />Donec nec justo<br />
            Morbi in se
          </div>
        )}
      />

      <FooterColumn
        firstRow="Consetu"
        secondRow={(
          <div>Quisque a lectus<br />
            Donec consecte<br />
            Nulla sed leoniton
          </div>
        )}
      />
    </div>
    <CiteInfo />
  </div>
);

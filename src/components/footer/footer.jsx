import React from 'react';

import './footer.scss';

import { FooterColumn } from './footer-column';
import { SiteInfo } from './footer-site-info';

const headerAndLabel = [
  {
    header: 'Vitae lin',
    label: 'hasellus ultrices Sed adipiscing lipsum Nulla sed leoniton',
  },
  {
    header: 'Luctrus',
    label: 'hasellus ultrices Sed adipiscing lipsum Nulla sed leoniton',
  },
  {
    header: 'Consetu',
    label: 'Quisque a lectus Donec consecte Nulla sed leoniton',
  },
  {
    header: 'Vitae linn',
    label: 'hasellus ultrices Sed adipiscing lipsum Nulla sed leoniton',
  },
  {
    header: 'Luctrusn',
    label: 'hasellus ultrices Sed adipiscing lipsum Nulla sed leoniton',
  },
  {
    header: 'Consetun',
    label: 'Quisque a lectus Donec consecte Nulla sed leoniton',
  },
];

const columns = headerAndLabel.map(({ header, label }) => (
  <FooterColumn
    firstRow={header}
    secondRow={label}
    key={header}
  />
));

export const Footer = () => (
  <div className="container-for-footer">
    <div className="upper-part-footer-container">
      {columns}
    </div>
    <SiteInfo />
  </div>
);

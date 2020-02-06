import React from 'react';

import './container-with-blue-bg.scss';

import { BlueColumn } from './blue-column';

const dataForBlueContainer = [
  {
    key: '0',
    header: 'container-with-blue',
    label: 'Phasellus ultrices nulla quis nibh.Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
  {
    key: '1',
    header: 'Vestibul auctor',
    label: 'Loasellus ltrices nulla quis nibh.Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
  {
    key: '2',
    header: 'Cras ornare',
    label: 'Simasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
];

const columnsForBlueConteiner = dataForBlueContainer.map(({ header, label, key }) => (
  <BlueColumn
    key={key}
    text1={header}
    text2={label}
  />
));

export const ContainerWithBlueBg = () => (
  <div className="container-with-blue">
    {columnsForBlueConteiner}
  </div>
);

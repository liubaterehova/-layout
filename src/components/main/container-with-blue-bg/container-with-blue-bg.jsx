import React from 'react';

import './container-with-blue-bg.scss';

import { BlueColumn } from './blue-column';

const dataForBlueContainer = [
  {
    header: 'container-with-blue',
    label: 'Phasellus ultrices nulla quis nibh.Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
  {
    header: 'Vestibul auctor',
    label: 'Loasellus ltrices nulla quis nibh.Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
  {
    header: 'Cras ornare',
    label: 'Simasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
];

const columnsForBlueConteiner = dataForBlueContainer.map(({ header, label }) => (
  <BlueColumn
    text1={header}
    text2={label}
  />
));

export const ContainerWithBlueBg = () => (
  <div className="container-with-blue">
    {columnsForBlueConteiner}
  </div>
);

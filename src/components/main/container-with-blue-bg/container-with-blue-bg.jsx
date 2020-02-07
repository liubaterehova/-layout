import React from 'react';

import { BlueColumn } from './blue-column';

import './container-with-blue-bg.scss';

const dataForBlueContainer = [
  {
    key: '0',
    title: 'container-with-blue',
    label: 'Phasellus ultrices nulla quis nibh.Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
  {
    key: '1',
    title: 'Vestibul auctor',
    label: 'Loasellus ltrices nulla quis nibh.Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
  {
    key: '2',
    title: 'Cras ornare',
    label: 'Simasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
  },
];

const columnsForBlueConteiner = dataForBlueContainer.map(({ title, label, key }) => (
  <BlueColumn
    key={key}
    title={title}
    label={label}
  />
));

export const ContainerWithBlueBg = () => (
  <div className="container-with-blue">
    {columnsForBlueConteiner}
  </div>
);

import React from 'react';

import './container-with-guys.scss';

import { PersonCard } from './person-card';
import SelectTab from './select-tab';

const dataForGuys = [{
  key: '0',
  sex: 'woman',
  altForPhoto: 'woman',
  title: 'Lorem ipsum dolor sit amet',
  label: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus tpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu',
},
{
  key: '1',
  sex: 'man',
  altForPhoto: 'man',
  title: 'Sed egestas ante et vulpu',
  label: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus tpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu',
}];

const rowsForGuys = dataForGuys.map((
  {
    sex, altForPhoto, title, label, key,
  },
) =>
  (
    <PersonCard
      key={key}
      sex={sex}
      altForPhoto={altForPhoto}
      title={title}
      label={label}
    />
  ));

export const ContainerWithGuys = () => (
  <div className="container-with-guys"> {/* TODO: container with guys ?))) */}
    <div className="people-in-container"> {/* TODO: people in container ?))) */}
      {rowsForGuys}
    </div>

    <div className="table-in-container">
      <SelectTab />
    </div>
  </div>
);

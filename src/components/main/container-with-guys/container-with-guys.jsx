import React from 'react';
import './style.scss';
import woman from '../../png/tetka.png';
import man from '../../png/mushik.png';
import { PersonCard } from './person-card';
import SelectTab from './select-tab';

export const ContainerWithGuys = () => (
  <div className="container-with-guys"> {/* TODO: container with guys ?))) */}
    <div className="people-in-container"> {/* TODO: people in container ?))) */}
      <PersonCard
        photo={woman}
        altForPhoto="woman"
        text1="Lorem ipsum dolor sit amet"
        text2={(
          <div>
          Sed egestas, ante et vulputate volutpat, eros pede semper est,
          vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
          id, est. Sed lectus tpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
          nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu
          </div>
        )}
      />
      <PersonCard
        photo={man}
        altForPhoto="man"
        text1="Sed egestas ante et vulpu"
        text2={(
          <div>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
          id, est. Sed lectus tpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar
          nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu
          </div>
        )}
      />
    </div>

    <div className="table-in-container">
      <SelectTab />
    </div>
  </div>
);

import React from 'react';
import './style.scss';
import { BlueColumn } from './blue-column';

export const ContainerWithBlue = () => (
  <div className="container-with-blue">
    <BlueColumn
      text1="Ausce Cellentes"
      text2={(
        <div>
          Phasellus ultrices nulla quis nibh.
          Quisque a lectus. Donec consectetuer
         ligula vulputate sem tristique
        </div>
      )}
    />
    <BlueColumn
      text1="Vestibul auctor"
      text2={(
        <div>
          Loasellus ltrices nulla quis nibh.
          Quisque a lectus. Donec consectetuer
          ligula vulputate sem tristique
        </div>
      )}
    />
    <BlueColumn
      text1="Cras ornare"
      text2={(
        <div>
          Simasellus ultrices nulla quis nibh.
          Quisque a lectus. Donec consectetuer
         ligula vulputate sem tristique
        </div>
      )}
    />
  </div>
);


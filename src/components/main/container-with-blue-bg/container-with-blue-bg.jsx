import React from 'react';
import './container-with-blue-bg.scss';
import { BlueColumn } from './blue-column';

// TODO: We should put all data in array and use .map() for render
export const ContainerWithBlueBg = () => (
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
    <div className="gap-1" />
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
    <div className="gap-1" />
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

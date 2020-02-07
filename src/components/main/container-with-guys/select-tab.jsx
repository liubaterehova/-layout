import React, { useState } from 'react';
import ClassNames from 'classnames';

import './container-with-guys.scss';

const textForTable = [
  {
    id: 1,
    tabName: 'Eronped',
    title: 'Sedegin libero commma',
    label: 'Simasellus ultrices nulla quis nibh Quisque a lectus Donec consectutuer ligula vulputate sem tristique sem tris',
  },
  {
    id: 2,
    tabName: 'Centro',
    title: 'Another text for tab Centro',
    label: 'The self-study lessons in this section are written and organised according to the levels of the Common European',
  },
];

const listDescriptions = [
  {
    key: 1,
    description: 'Cras ornare tristique elit  sinto sum',
  },
  {
    key: 2,
    description: 'Integer vitae libero ac risus egestas',
  },
  {
    key: 3,
    description: 'Vestibulum commodo felis quis tortor',
  },
  {
    key: 4,
    description: 'Donec quis dui at dolor tempor interd',
  },
  {
    key: 5,
    description: 'Fusce lobortis lorem at ipsum semper',
  },
];

const listUnderTabs = listDescriptions.map(({ key, description }) => (
  <div key={key} className="style-item-in-list">{description}</div>
));

export const SelectTab = () => {
  const [currentTabId, changeCurrentTabId] = useState(1);

  const onClickTab = (e) => {
    changeCurrentTabId(Number(e.target.dataset.tabid));
  };

  const { title, label } = textForTable.find(({ id }) => id === currentTabId);

  return (
    <div className="select-tab-container">
      <div className="select-tab-upper-part">
        <div>
          <button
            type="button"
            className={ClassNames('tab',
              {
                active: currentTabId === 1,
              })}
            onClick={onClickTab}
            data-tabid={1}
          >Eronped
          </button>
          <button
            type="button"
            className={ClassNames('tab',
              {
                active: currentTabId === 2,
              })}
            onClick={onClickTab}
            data-tabid={2}
          >
            Centro
          </button>
        </div>
        <div className="text-in-selected-tab-container">
          <div className="header-in-selected-tab">{title}</div>
          <div className="main-text-in-selected-tab">{label}</div>
        </div>
      </div>
      <div className="select-tab-down-part">
        <div className="arrows-imgs-in-down-part" />
        <div className="list">
          {listUnderTabs}
        </div>
      </div>
    </div>
  );
};

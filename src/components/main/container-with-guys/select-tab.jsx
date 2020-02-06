import React, { Component } from 'react';
import ClassNames from 'classnames';

import './container-with-guys.scss';

import Arrows from '../../png/fiveArrows.png';

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

export default class SelectTab extends Component {
  state = {
    currentTabId: 1,
  }

  onClickTab = (e) => {
    this.setState({
      currentTabId: Number(e.target.dataset.tabid),
    });
  }

  render() {
    const { title, label } = textForTable.find(({ id }) => id === this.state.currentTabId);

    return (
      <div className="select-tab-container">
        <div className="select-tab-upper-part">
          <div>
            <button
              type="button"
              className={ClassNames('tab',
                {
                  active: this.state.currentTabId === 1,
                })}
              onClick={this.onClickTab}
              data-tabid={1}
            >Eronped
            </button>
            <button
              type="button"
              className={ClassNames('tab',
                {
                  active: this.state.currentTabId === 2,
                })}
              onClick={this.onClickTab}
              data-tabid={2}
            >
              Centro
            </button>
          </div>
          <div className={`${this.state.visibilityTextFirstTab} text-in-selected-tab-container`}>
            <div className="header-in-selected-tab">{title}</div>
            <div className="main-text-in-selected-tab">{label}</div>
          </div>
        </div>
        <div className="select-tab-down-part">
          <div className="arrows-imgs-in-down-part">
            <img src={Arrows} alt="arrows" className="image-arrow" />
          </div>
          <div>
            <ul>
              {/* TODO: Please, save all text in array and use .map() for render */}
              <li>Cras ornare tristique elit  sinto sum</li>
              <div className="hr-in-down-part" /> {/* TODO: Why do you use */}
              <li>Integer vitae libero ac risus egestas</li>
              <div className="hr-in-down-part" />
              <li>Vestibulum commodo felis quis tortor</li>
              <div className="hr-in-down-part" />
              <li>Donec quis dui at dolor tempor interd</li>
              <div className="hr-in-down-part" />
              <li>Fusce lobortis lorem at ipsum semper</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

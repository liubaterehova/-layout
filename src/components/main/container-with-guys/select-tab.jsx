import React, { Component } from 'react';
import './container-with-guys.scss';
import Arrows from '../../png/fiveArrows.png';

export default class SelectTab extends Component {
  state = {
    classNameForFirstTab: 'tab-active',
    classNameForSecondTab: 'tab-no-active',
    visibilityTextFirstTab: '',
    visibilityTextSecondTab: 'unVisible',
  }

  onClickTab = (e) => {
    e.target.classList.remove('tab-no-active');
    e.target.classList.add('tab-active');

    if (e.target.nextSibling) {
      this.setState({
        classNameForFirstTab: 'tab-active',
        classNameForSecondTab: 'tab-no-active',
        visibilityTextFirstTab: '',
        visibilityTextSecondTab: 'unVisible',
      });
    } else {
      this.setState({
        classNameForFirstTab: 'tab-no-active',
        classNameForSecondTab: 'tab-active',
        visibilityTextFirstTab: 'unVisible',
        visibilityTextSecondTab: '',
      });
    }
  };

  render() {
    return (
      <div className="select-tab-container">
        <div className="select-tab-upper-part">
          <div>
            <button type="button" className={this.state.classNameForFirstTab} onClick={this.onClickTab}>Eronped</button>
            <button type="button" className={this.state.classNameForSecondTab} onClick={this.onClickTab}>Centro</button>
          </div>
          <div className={`${this.state.visibilityTextFirstTab} text-in-selected-tab-container`}>
            <div className="header-in-selected-tab">Sedegin libero commma</div>
            <div className="main-text-in-selected-tab">Simasellus ultrices nulla quis nibh Quisque a lectus Donec consectutuer ligula vulputate sem tristique sem tris</div>
          </div>
          <div className={`${this.state.visibilityTextSecondTab} text-in-selected-tab-container`}>
            <div className="header-in-selected-tab">Another text for tab Centro</div>
            <div className="main-text-in-selected-tab">The self-study lessons in this section are written and organised according to the levels of the Common European </div>
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

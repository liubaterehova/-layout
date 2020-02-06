import React, { Component } from 'react';
import classNames from 'classnames';

import { Header } from './components/header/header';
import { Main } from './components/main/main/main';
import { Footer } from './components/footer/footer';

import './style.scss';

export default class App extends Component {
  state = {
    isModalShow: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalShow: !prevState.isModalShow,
    }));
  };

  render() {
    return (
      <div className={classNames('app', {
        'no-scroll': this.state.isModalShow,
      })}
      >
        <Header
          toggleModal={this.toggleModal}
          isModalShow={this.state.isModalShow}
        />
        <Main />
        <Footer />
      </div>
    );
  }
}

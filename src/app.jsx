import React, { Component } from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/main/main';
import { Footer } from './components/footer/footer';
import './style.scss';

export default class App extends Component {
  state = {
    scrollProperty: '',
  };

  changeScroll = (classNameForScroll) => {
    this.setState({ scrollProperty: classNameForScroll });
  };

  render() {
    return (
      <div className={`app ${this.state.scrollProperty}`}>
        <Header changeScroll={this.changeScroll} />
        <Main />
        <Footer />
      </div>
    );
  }
}

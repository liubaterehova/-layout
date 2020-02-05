import React, { Component } from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main/main';
import { Footer } from '../footer/footer';
import './style.scss';

export default class Page extends Component {
  state = {
    scrollProperty: '',
  };

  changeScroll = (classNameForScroll) => {
    this.setState({ scrollProperty: classNameForScroll });
  };

  render() {
    return (
      <div className={`page ${this.state.scrollProperty}`}>
        <Header changeScroll={this.changeScroll} />
        <Main />
        <Footer />
      </div>
    );
  }
}

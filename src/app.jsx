import React, { useState } from 'react';
import classNames from 'classnames';

import { Header } from './components/header/header';
import { Main } from './components/main/main/main';
import { Footer } from './components/footer/footer';

import './style.scss';

export const App = () => {
  const [isModalShow, showModal] = useState(false);

  const toggleModal = () => {
    showModal(!isModalShow);
  };

  return (
    <div className={classNames('app', {
      'no-scroll': isModalShow,
    })}
    >
      <Header
        toggleModal={toggleModal}
        isModalShow={isModalShow}
      />
      <Main />
      <Footer />
    </div>
  );
};


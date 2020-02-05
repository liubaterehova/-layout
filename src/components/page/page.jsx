import React from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main/main';
import { Footer } from '../footer/footer';
import './style.scss';

export const Page = () =>
// const [scrolling, makeNoScroll] = useState('');

// const changeScroll = () => {
//   makeNoScroll('');
// };

  (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );


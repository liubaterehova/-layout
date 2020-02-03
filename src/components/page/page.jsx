import React from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main/main';
import { Footer } from '../footer/footer';
import './style.scss';

export const Page = () => (
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
);

import React from 'react';
import { ContainerWithPhone } from '../container-with-phone/container-with-phone';
import { ContainerWithBlue } from '../container-with-blue/container-with-blue';
import { ContainerWithGuys } from '../container-with-guys/container-with-guys';
import { ContainerWithOrange } from '../container-with-orange/container-with-orange';
import { ContainerWithCalendar } from '../container-with-calendar/container-with-calendar';

import './style.scss';

export const Main = () => (
  <div className="containerForMain">
    <ContainerWithPhone />
    <ContainerWithBlue />
    <ContainerWithGuys />
    <ContainerWithOrange />
    <ContainerWithCalendar />
  </div>
);

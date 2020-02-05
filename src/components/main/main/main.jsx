import React from 'react';
import { ContainerWithPhone } from '../container-with-phone/container-with-phone';
import { ContainerWithBlueBg } from '../container-with-blue-bg/container-with-blue-bg';
import { ContainerWithGuys } from '../container-with-guys/container-with-guys';
import { ContainerWithOrangeBg } from '../container-with-orange-bg/container-with-orange-bg';
import { ContainerWithCalendar } from '../container-with-calendar/container-with-calendar';

import './style.scss';

export const Main = () => (
  <div className="containerForMain">
    <ContainerWithPhone />
    <ContainerWithBlueBg />
    <ContainerWithGuys />
    <ContainerWithOrangeBg />
    <ContainerWithCalendar />
  </div>
);

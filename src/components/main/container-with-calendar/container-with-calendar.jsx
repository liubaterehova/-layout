import React from 'react';

import './container-with-calendar.scss';

import { PartWithCalendar } from './calendar-part';
import { PartWithComment } from './comment';

export const ContainerWithCalendar = () => (
  <div className="container-with-calendar">
    <div className="first-header-in-calendar-conteiner">Vestibulum Commodo Felis</div>
    <div className="second-header-in-calendar-conteiner">Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna</div>
    <div className="calendar-and-comments-in-calendar-container">
      <div className="calendar-part-in-calendar-conteiner">
        <PartWithCalendar
          text1="Gravida Ultrice"
          text2="14 Comments"
          text3={(
            <div>Suspendisse ac urna. Etiam pellentesque mauris ut lectus nunc tellus ante, mattis eget,
              gravida vitae, ultricies atinvio
            </div>
          )}
        />
        <PartWithCalendar
          text1="Tellus Mattis Pelle"
          text2="07 Comments"
          text3={(
            <div>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
              ultricies in, diam. Sed arcu
            </div>
          )}
        />
        <PartWithCalendar
          text1="Phasellus Lacina"
          text2="22 Comment"
          text3={(
            <div>Lospendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
              tellus ante,
              mattis eget, gravida vitae, ultricies atinvio
            </div>
          )}
        />
      </div>
      <div className="comments-part-in-calendar-conteiner">
        <PartWithComment
          text1="“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’"
          author="- John Doe"
        />
        <PartWithComment
          text1="“ Ced egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’"
          author="- Kate Doe"
        />
      </div>
    </div>
  </div>
);

import React from 'react';

import './container-with-calendar.scss';

import { PartWithCalendar } from './calendar-part';
import { PartWithComment } from './comment-part';

const calendarDatas = [{
  key: 0,
  title: 'Gravida Ultrice',
  numberAndComments: '14 Comments',
  description: 'Suspendisse ac urna. Etiam pellentesque mauris ut lectus nunc tellus ante, mattis eget, gravida vitae, ultricies atinvio',
},
{
  key: 1,
  title: 'Tellus Mattis Pelle',
  numberAndComments: '07 Comments',
  description: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu',
},
{
  key: 2,
  title: 'Phasellus Lacina',
  numberAndComments: '22 Comment',
  description: 'Lospendisse ac urna. Etiam pellentesque mauris ut lectus. Nunctellus ante, mattis eget, gravida vitae, ultricies atinvio',
},
];

const comments = [
  {
    key: 3,
    description: '“Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’',
    author: '- John Doe',
  },
  {
    key: 4,
    description: '“Ced egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’',
    author: '- Kate Doe',
  },
];

const partWithCalendar = calendarDatas.map(({
  title, numberAndComments, description, key,
}) => (
  <PartWithCalendar
    key={key}
    title={title}
    numberAndComments={numberAndComments}
    description={description}
  />
));
const partWithComment = comments.map(({ description, author, key }) => (
  <PartWithComment
    key={key}
    description={description}
    author={author}
  />
));

export const ContainerWithCalendar = () => (
  <div className="container-with-calendar">
    <div className="first-header-in-calendar-conteiner">Vestibulum Commodo Felis</div>
    <div className="second-header-in-calendar-conteiner">Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna</div>
    <div className="calendar-and-comments-in-calendar-container">
      <div className="calendar-part-in-calendar-conteiner">
        {partWithCalendar}
      </div>
      <div className="comments-part-in-calendar-conteiner">
        {partWithComment}
      </div>
    </div>
  </div>
);

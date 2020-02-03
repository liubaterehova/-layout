import React from 'react';
import './style.scss';
import { Calendar } from './calendar';
import { Comment } from './comment';

export const ContainerWithCalendar = () => (
  <div className="containerWithCalendar">
    <div className="header">Vestibulum Commodo Felis</div>
    <div className="hr" />
    <div className="textUnderHeader">Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna</div>
    <div className="hr" />
    <div className="calendarAndComments">
      <div className="calendar">
        <Calendar
          text1="Gravida Ultrice"
          text2="14 Comments"
          text3={(
            <div>Suspendisse ac urna. Etiam pellentesque mauris ut lectus nunc<br /> tellus ante, mattis eget,
      gravida vitae, ultricies atinvio
            </div>
          )}
        />
        <Calendar
          text1="Tellus Mattis Pelle"
          text2="07 Comments"
          text3={(
            <div>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euis<br />mod in, pharetra a,
          ultricies in, diam. Sed arcu
            </div>
          )}
        />
        <Calendar
          text1="Phasellus Lacina"
          text2="22 Comment"
          text3={(
            <div>Lospendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc<br />
          tellus ante,
          mattis eget, gravida vitae, ultricies atinvio
            </div>
          )}
        />
      </div>
      <div className="comments">
        <Comment
          text1="“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’"
          author="- John Doe"
        />
        <Comment
          text1="“ Ced egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’"
          author="- Kate Doe"
        />
      </div>

    </div>
  </div>
);

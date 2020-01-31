import React from 'react';
import './style.scss';
import data from '../../png/data.png';
import circleMessage from '../../png/circleMessage.png';

export const ContainerWithCalendar = () => (
  <div className="containerWithCalendar">
    <div className="header">Vestibulum Commodo Felis</div>
    <div className="hr" />
    <div className="textUnderHeader">Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna</div>
    <div className="hr" />
    <div className="calendarAndComments">
      <div className="calendar">
        <div className="row">
          <div className="data"><img src={data} alt="data" /></div>
          <div className="textForData">
            <div className="headerTextCalendar">Gravida Ultrice</div>
            <div className="commentsForData">14 Comments</div>
            <div className="textUnderComments">Suspendisse ac urna. Etiam pellentesque mauris ut lectus nunc tellus ante, mattis eget,
              gravida vitae, ultricies atinvio
            </div>
          </div>
        </div>
        <div className="row">
          <div className="data"><img src={data} alt="data" /></div>
          <div className="textForData">
            <div className="headerTextCalendar">Tellus Mattis Pelle</div>
            <div className="commentsForData">07 Comments</div>
            <div className="textUnderComments">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
               ultricies in, diam. Sed arcu
            </div>
          </div>
        </div>
        <div className="row">
          <div className="data"><img src={data} alt="data" /></div>
          <div className="textForData">
            <div className="headerTextCalendar">Phasellus Lacina</div>
            <div className="commentsForData">22 Comments</div>
            <div className="textUnderComments">Lospendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
              tellus ante,
              mattis eget, gravida vitae, ultricies atinvio
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="blockComment">
          <div className="textComment">
            <div className="text">“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’</div>
            <div className="author">- John Doe</div>
          </div>
          <div className="message"><img src={circleMessage} alt="msg" /></div>
        </div>
        <div className="blockComment">
          <div className="textComment">
            <div className="text">“ Ced egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing’</div>
            <div className="author">- Kate Doe</div>
          </div>
          <div className="message"><img src={circleMessage} alt="msg" /></div>
        </div>
      </div>
    </div>
  </div>
);

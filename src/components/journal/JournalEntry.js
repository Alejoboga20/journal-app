import moment from 'moment';
import React from 'react';

export const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);

  return (
    <div className='journal__entry'>
      {url && (
        <div
          className='journal__entry-picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`
          }}
        ></div>
      )}

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>{title}</p>
        <p className='journal__entry-content'>{body}</p>
      </div>

      <div className='journal__entry-date-box'>
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};

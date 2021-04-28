import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png)'
        }}
      ></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>A new Day</p>
        <p className='journal__entry-content'>
          Anim incididunt voluptate ut anim voluptate tempor deserunt duis
          aliqua sunt fugiat.
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

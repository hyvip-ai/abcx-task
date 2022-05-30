import React from 'react';
import Card from '../component/Card';

const cardContent = ['A', 'B'];

function Cards() {
  return (
    <div className='cards'>
      {cardContent.map((item) => (
        <Card data={item} key={item} />
      ))}
    </div>
  );
}

export default Cards;

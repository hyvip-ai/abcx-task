import { Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Arrow from '../assets/arrow.jpg';

function Details() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className='d-flex justify-content-center align-items-center selected-wrapper'>
      <Button variant='info back' onClick={() => navigate('/cards')}>
        <img src={Arrow} alt='arrow' />
      </Button>
      <div className='selected'>{searchParams.get('selected')} is selected</div>
    </div>
  );
}

export default Details;

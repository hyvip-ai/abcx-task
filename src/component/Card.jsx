import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  const navigate = useNavigate();

  return (
    <button
      className='myCard'
      onClick={() => {
        navigate(`/details?selected=${data}`);
      }}
    >
      {data}
    </button>
  );
}

export default Card;

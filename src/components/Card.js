import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className=' tc grow bg-light-blue br4 pa3 ma2 dib bw2 shadow-2'>
      <img alt='robots' src={`https://robohash.org/set_set3/${id}?size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

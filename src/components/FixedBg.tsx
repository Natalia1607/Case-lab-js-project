import React from 'react';

function FixedBg() {
  return(
    <div className='bg'>
      <img className='bg__item-1' src={require('../images/Broccoli.png')} alt="Broccoli" />
      <img className='bg__item-2' src={require('../images/Pepper.png')} alt="Pepper" />
      <img className='bg__item-3' src={require('../images/Champignon.png')} alt="Champignon" />
      <img className='bg__item-4' src={require('../images/Potatoes.png')} alt="Potatoes" />
      <img className='bg__item-5' src={require('../images/Tomatoes.png')} alt="Tomatoes" />
    </div>
  );
};

export default FixedBg;
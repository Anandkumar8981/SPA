import React from 'react';
import '../components/styles/card.css';
const Cards = ({item}) => {
    const {title , price, img}=item;
  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={img} alt="image" />
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>price - {price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
};
export default Cards;


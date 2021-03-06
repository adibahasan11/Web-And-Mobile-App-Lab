import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './Product.css';

const Product = (props) => {
  const handleClick = (e) => {
    props.sortAfterClick( props.id );
  };

  return (
    <div className = 'product'>
      <div className = 'product__left'>
        <img className = 'product__image' src = { props.image } alt ='product' />
      </div>
      <div className = 'product__right'>
        <div className = 'product__rowOne'>
          <div className = 'product__upvote' onClick = { handleClick }>
            <ArrowDropUpIcon />
          </div>
          <div className = 'product__upvoteCount'>{ props.upvote }</div>
        </div>
        <div className = 'product__rowTwo'>
          <div className = 'product__title'>{ props.title }</div>
          <div className = 'product__description'>{ props.description }</div>
        </div>
        <div className = 'product__rowThree'>
          <div className = 'product__submit'>Submitted By: </div>
          <img
            className = 'product__avatar'
            src = { props.submittedBy }
            alt = 'product'
          />
        </div>
      </div>
    </div>
  );
};

export default Product;

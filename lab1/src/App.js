import React, { useState } from 'react';

import './App.css';

import avator1 from './images/man-people-svgrepo-com.svg';
import avator2 from './images/man-people-svgrepo-com (1).svg';
import avator3 from './images/man-people-svgrepo-com (2).svg';
import avator4 from './images/man-people-svgrepo-com (3).svg';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

import Product from './Product';

function App() {
  let products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 
        'On-demand sand castle construction expertise.',
      upvote: 63,
      submittedBy: avator1,
      image: image1,
    },

    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description:
        'Earn points when your favorite politicians pass legislation.',
      upvote: 54,
      submittedBy: avator2,
      image: image2,
    },

    {
      id: 3,
      title: 'Tinfolid: Tailored tinfoil hats',
      description: 
        'We already have your measurements and shipping address.',
      upvote: 30,
      submittedBy: avator3,
      image: image3,
    },
    
    {
      id: 4,
      title: 'Haught or Naught',
      description: 
        'High-minded or absent-minded? You decide.',
      upvote: 61,
      submittedBy: avator4,
      image: image4,
    },
  ];

  const [sortedProducts, setSortedProducts] = useState(
    products.sort((x, y) => {
      return y.upvote - x.upvote;
    })
  );

  const [renderProductsList, setRenderList] = useState(null);

  const getRenderList = () => {
    let renderProducts = sortedProducts.map((product) => (
      <Product
        key = { product.id }
        id = { product.id }
        title = { product.title }
        description = { product.description }
        upvote = { product.upvote }
        submittedBy = { product.submittedBy }
        image = { product.image }
        sortAfterClick = { sortAfterClick }
      />
    ));
    setRenderList(renderProducts);
  };

  const sortAfterClick = (pid) => {
    sortedProducts.map((product) => {
      if (product.id === pid) {
        product.upvote = product.upvote + 1;
      }
    });

    setSortedProducts(
      sortedProducts.sort((x, y) => {
        return y.upvote - x.upvote;
      })
    );

    getRenderList();
  };

  return (
    <div className='App'>
      <div className='app__header'>Popular Products</div>
      {renderProductsList
        ? renderProductsList
        : sortedProducts.map((product) => (
            <Product
              key = { product.id }
              id = { product.id }
              title = { product.title }
              description = { product.description }
              upvote = { product.upvote }
              submittedBy = { product.submittedBy }
              image = { product.image }
              sortAfterClick = { sortAfterClick }
            />
          ))}
    </div>
  );
}

export default App;

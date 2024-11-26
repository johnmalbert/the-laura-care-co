import React, { useState } from 'react';
import '../styles/Products.css';

const productsData = [
  {
    id: 1,
    name: 'Handmade Necklace',
    price: 50,
    description: 'Beautifully crafted necklace',
    images: ['/images/necklace1.jpg', '/images/necklace1.jpg', '/images/necklace1.jpg'],
  },
  {
    id: 2,
    name: "Kid's Hats",
    price: 10,
    description: 'With the cold approaching, make sure they are covered!',
    images: ['/images/hat1.jpg', '/images/hat2.jpg', '/images/hat3.jpg'],
  },
  {
    id: 3,
    name: 'A Night with Israel',
    price: 1000,
    description: 'A unique experience for an unforgettable evening.',
    images: ['/images/israel3.jpg', '/images/israel2.jpg', '/images/israel1.jpg'],
  },
  {
    id: 4,
    name: 'Half Marathon Training',
    price:'Priceless',
    description: 'A unique experience for an unforgettable evening.',
    images: ['/images/marathon1.jpg', '/images/marathon2.jpg', '/images/marathon3.jpg'],
  }
  // Add more products here
];

function Products() {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    productsData.map(() => 0) // Initialize array with 0 for each product
  );

  const handleNextImage = (index) => {
    setCurrentImageIndex((prevState) =>
      prevState.map((imgIdx, idx) => (idx === index ? (imgIdx + 1) % productsData[index].images.length : imgIdx))
    );
  };

  const handlePrevImage = (index) => {
    setCurrentImageIndex((prevState) =>
      prevState.map((imgIdx, idx) =>
        idx === index ? (imgIdx - 1 + productsData[index].images.length) % productsData[index].images.length : imgIdx
      )
    );
  };

  const handleImageSelect = (index, imageIndex) => {
    setCurrentImageIndex((prevState) =>
      prevState.map((imgIdx, idx) => (idx === index ? imageIndex : imgIdx))
    );
  };

  return (
    <div className="products-page">
      <div className="product-grid">
        {productsData.map((product, index) => (
          <div key={product.id} className="product-card">
            <div className="product-images">
              <img
                src={product.images[currentImageIndex[index]]}
                alt={product.name}
                className="product-image"
              />
              <button className="prev-button" onClick={() => handlePrevImage(index)}>
                &lt;
              </button>
              <button className="next-button" onClick={() => handleNextImage(index)}>
                &gt;
              </button>
            </div>

            {/* Image navigation buttons */}
            <div className="image-nav-buttons">
              {product.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  className={`image-nav-button ${
                    currentImageIndex[index] === imgIndex ? 'active' : ''
                  }`}
                  onClick={() => handleImageSelect(index, imgIndex)}
                >
                  {imgIndex + 1}
                </button>
              ))}
            </div>

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

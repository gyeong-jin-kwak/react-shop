import React from 'react';

const Product = ({url, title, price, content}) => {
  return(
    <>
      <div className="col-md-4">
        <div className="item-wrp">
          <img src={url} alt={title} className="product-pic" />
          <strong className="product-title">{title}</strong>
          <em className="product-price">{price}won</em>
          <p className="product-content">{content}</p>
        </div>
      </div>
    </>
  )
}

export default Product;
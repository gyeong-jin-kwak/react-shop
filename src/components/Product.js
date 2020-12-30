import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({index, url, title, price, content}) => {

  let history = useHistory();

  return(
    <>
      <div className="col-md-4" onClick={()=>{
        history.push('/detail/' + index)
      }}>
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
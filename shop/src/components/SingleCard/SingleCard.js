import React from "react";

const SingleCard = ({ product }) => {
  console.log(product);
  return (
    <div className="card-item">
      <div className="card-stopper">Free shipping</div>
      <div className="card-item__thumb">
        <img src={product.img} alt={product.style} />
      </div>
      <p className="card-item__title">{product.title}</p>
      <div className="card-item__price">
        <div className="val">{product.currencyFormat} {product.price}</div>
      </div>
      <div className="card-item__buy-btn">Add to cart</div>
    </div>
  );
};

export default SingleCard;

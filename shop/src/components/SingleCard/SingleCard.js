import React from "react";
import PropTypes from "prop-types";

const SingleCard = ({ style, price, title, currencyFormat, img, isFreeShipping, type }) => {
  // const { style, price, title, currencyFormat, img, isFreeShipping, type } = props;
  // console.log("props", props);
  return (
    <div className="card-item">
      {isFreeShipping && <div className="card-stopper">Free shipping</div>}
      {/* {shipping ? (<div className="card-stopper">Free shipping</div>) : null} */}

      <div className="card-item__thumb">
        <img src={img} alt={style} />
      </div>
      <p className="card-item__title">{title}</p>
      <div className="card-item__price">
        <div className="val">
          {currencyFormat} {price}
        </div>
      </div>
      <div className={type}>Add to cart</div>
      {/* {type && <div className={type}>Add to cart</div>} */}
      {/* <div className="card-item__buy-btn">Add to cart</div> */}
    </div>
  );
};

SingleCard.defaultProps = {
  type: "card-item__buy-btn",
  img: "https://i.ibb.co/0jDhL34/51498472915966370-1.jpg",
};

SingleCard.propTypes = {
  style: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  currencyFormat: PropTypes.string.isRequired,
  img: PropTypes.string,
  isFreeShipping: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default SingleCard;

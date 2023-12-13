import React from "react";
import './index.scss'
const ProductCard = ({image,name,price,info}) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="ProductCard_content">
        <div className="ProductCard_top">
          <div className="ProductCard_img">
            <img src={image} alt="" />
          </div>

          <div className="ProductCard_overlay">
            <div className="card_overlay_btn">
              <button>add to cart</button>
            </div>
          </div>
        </div>

        <h6 className="ProductCard_title">{name}</h6>
        <div className="ProductCard_price">
          <span>${price}</span>
        </div>
        
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ProductCard;

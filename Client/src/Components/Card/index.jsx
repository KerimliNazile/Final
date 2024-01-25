import React from "react";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";
const Card = ({ image, text, title, price, product, id }) => {
  const { addWish } = useContext(WishlistContext);
  return (
    <>
      <div className="CardinArea">
        <div className="CardArea">
          <div className="CardImg">
            <img src={image} alt="" />
          </div>

          <h1>{text}</h1>

          <p>{title}</p>

          <p>${price}</p>

          <div className="CardIcon">
            <div onClick={() => addWish(product)}>
              <FaHeart className="eye" />
            </div>
            <Link to={`/${id}`}>
              <FaEye className="eye" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import './index.scss'
const Wishlist = () => {
  const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
<h1>Wishlist</h1>
<div className="Wishlist">
  {wish&&wish.map(x=>
    <ul>
      <li className="imgli"><img src={x.image} alt="" /></li>
      <li className="imgli">{x.text}</li>
      <li className="imgli">{x.title}</li>
      <li className="imgli">{x.price}</li>
      <li className="imgli"><button onClick={()=> deleteWish(x)}>Delete</button></li>
    </ul>
    )}
</div>
    </>
  );
};

export default Wishlist;

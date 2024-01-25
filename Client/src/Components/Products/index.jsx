import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Card from "../Card";


import './index.scss'
const Products = () => {
  const [product, setProduct] = useState([]);
  async function getProduct() {
    const data = await fetch("http://localhost:3000/finals");
    const res = await  data.json();
    setProduct(res);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <section id="Product">
        <div className="ProductArea">
          <div className="CardinArea">
            {product &&
              product.map((item) => (
                <Card
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  price={item.price}
product={item}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

import React from "react";
import { Helmet } from "react-helmet-async";
import Blog from "../../Components/Blog";
import Header from "../../Components/Header";
import Minibox from "../../Components/Minibox";
import Products from "../../Components/Products";
import Review from "../../Components/Reviewe";
import Welcome from "../../Components/Welcome";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <Welcome/>
       <Products />
      <Review/>
      <Blog/>
      <Minibox/>
     
    </>
  );
};

export default Home;

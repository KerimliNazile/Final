import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import "./index.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav>
        <div className="Logo">
          <img
            src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png"
            alt=""
          />
        </div>
        <div className="MainNav">
          <ul id="navin">
            <li>
              <NavLink to={"/home"}>HOME</NavLink>
            </li>
            <li>MENU</li>
            <li>RESERVATION</li>
            <li>GALLERY</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>
              <NavLink to={"/add"}> ADD PAGE</NavLink>

            </li>
          </ul>
        </div>
        <div className="IconNav">
          <FaFacebookF />
          <FaTwitter />
          <NavLink to={"/wishlist"}><FaHeart className="heart"/> </NavLink>
        </div>
        <div className="mobile" onClick={handleClick}>
          {isOpen ? <IoCloseSharp className="bars"/> : <FaBars className="bars" />}
        </div>
      </nav>
      <div className={`${isOpen ? "navlist_active" : "navlist_close"} navlist`}>
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>MENU</li>
        <li>RESERVATION</li>
        <li>GALLERY</li>
        <li>ABOUT</li>
        <li>BLOG</li>
        <li>CONTACT</li>
        <li>
          <NavLink to={"/add"}> ADD PAGE</NavLink>
        </li>
        <ul></ul>
      </div>
    </>
  );
};

export default Navbar;

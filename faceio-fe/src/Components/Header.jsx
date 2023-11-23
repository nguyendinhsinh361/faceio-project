import React from "react";
import {RegisterFaceIO} from "../Components/RegisterFaceIO";
import {Logo} from "../Components/Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="hidden md:flex gap-4 md:gap-14">
        <li
          className="hover:font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li className="hover:font-bold cursor-pointer">About Us</li>
        <li className="hover:font-bold cursor-pointer">Contact Us</li>
      </ul>
      <RegisterFaceIO />
    </div>
  );
};

export default Header;

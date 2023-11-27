import React from "react";
import {RegisterFaceIO} from "../Components/RegisterFaceIO";
import {Logo} from "../Components/Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="hidden md:flex gap-4 md:gap-16" style={{color: "black"}}>
        <li
          className="hover:font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          HOME
        </li>
        <li className="hover:font-bold cursor-pointer">ABOUT US</li>
        <li className="hover:font-bold cursor-pointer">CONTACT US</li>
      </ul>
      <RegisterFaceIO />
    </div>
  );
};

export default Header;

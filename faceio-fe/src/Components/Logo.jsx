import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "./../assets/Images/logo.png";

const Logo = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleSubscribe}
      style={{
        backgroundColor: "#ffffff",
        cursor: "pointer",
        border: "none",
        outline: "none",
      }}
    >
      <img src={logo} className="w-[6rem]" />
    </button>
  );
};

export {Logo};

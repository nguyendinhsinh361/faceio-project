import React from "react";
import {useNavigate} from "react-router-dom";
import {IoNotificationsCircle} from "react-icons/io5";

const RegisterFaceIO = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/register");
  };

  return (
    <button
      className="bg-blue-500 rounded-full text-white flex items-center text-[14px]"
      onClick={handleSubscribe}
    >
      Subscribe <IoNotificationsCircle className="ml-3 text-[20px]" />
    </button>
  );
};

export {RegisterFaceIO};

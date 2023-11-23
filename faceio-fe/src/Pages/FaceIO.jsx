// FaceIOComponent.jsx
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {saveUserInfoToDatabase} from "../Services/AuthApi";
import {ErrorHandling} from "../Services/ErrorHandlingFaceIO";
import "../assets/css/Auth.css";

function FaceIO() {
  const nav = useNavigate();

  let faceioInstance = null;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.faceio.net/fio.js";
    script.async = true;
    script.onload = () => loaded();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const loaded = () => {
    console.log(faceIO);
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO("fioaf19f");
    }
  };

  const faceRegistration = async () => {
    try {
      const userInfo = await faceioInstance.enroll({
        locale: "auto",
        payload: {
          email: "nguyendinhsinh361@gmail.com",
          userId: "faceio-sinhnd",
          username: "sinhnd",
        },
      });
      console.log(11111, userInfo);
      const payload = {
        facialId: userInfo.facialId,
        gender: userInfo.details.gender,
        age: userInfo.details.age,
        timestamp: userInfo.timestamp,
      };
      await saveUserInfoToDatabase(payload);
    } catch (errorCode) {
      console.log(errorCode);
      handleError(errorCode);
    }
  };

  const faceSignIn = async () => {
    try {
      console.log(faceioInstance);
      const userData = await faceioInstance.authenticate({
        locale: "auto",
      });
      console.log(userData);

      console.log("Unique Facial ID: ", userData.facialId);
      console.log("PayLoad: ", userData.payload);
      nav("/");
    } catch (errorCode) {
      console.log(errorCode);
      ErrorHandling(errorCode);
    }
  };

  return (
    <div className="app">
      <div className="app-content">
        <div className="app-img" style={{width: "40%"}}>
          <img src="https://faceio.net/images/fioauth.png" alt="" />
        </div>
        <div className="button-container">
          <button
            className="action face-registration"
            onClick={faceRegistration}
          >
            Đăng kí khuôn mặt
          </button>
          <button className="action face-sign-in" onClick={faceSignIn}>
            Đăng nhập với khuôn mặt
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaceIO;

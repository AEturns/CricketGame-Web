import Snackbar from "@mui/material/Snackbar";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Logo from "../assets/images/Logo-01.png";
import Login from "../components/Login";
import OTP from "../components/OTP";
import { sendOTP } from "../services/otp.service";
import {
  generateMessage,
  generateOTP,
  mobileGenerator,
} from "../util/otpGenerator";
import { WEB_URL } from "../config/const";
import LoadingFullscreen from "../components/LoadingFullscreen";

const LoginPage = () => {
  const [state, setState] = useState("LOGIN");
  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [serverRef, setServerRef] = useState("");
  const [loading, setLoading] = useState(false)

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
    message: "",
  });
  const { vertical, horizontal, open, message } = snackBarState;

  const handleClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  const sendOTPmessage = async (name, mobileNumber) => {
    // const {otp, decryptedOTP} = generateOTP(6)
    // setGeneratedOTP(otp)
    setLoading(true)
    setName(name);
    setMobileNumber(mobileNumber);
    await sendOTP(mobileNumber)
      .then((res) => {
        setServerRef(res?.data?.data.serverRef);
        if(res.data?.statusCode == "E1351" || res.data?.statusDetail == "user already registered" ) {
          localStorage.setItem("mycricq-username", name)
          localStorage.setItem("mycricq-mobile", mobileNumber)
          window.location.replace(WEB_URL + "selection?ref=" + mobileNumber + "&username=" + name)
          return
        }
        setLoading(false)
        setSnackBarState({
          open: true,
          vertical: "bottom",
          horizontal: "center",
          message: "OTP has sent to your mobile number !!",
        });
     
      })
      .catch((e) => {
        setLoading(false)
        setSnackBarState({
          open: true,
          vertical: "bottom",
          horizontal: "center",
          message: e.message,
        });
      });
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "10%" }} fixed>
      <LoadingFullscreen loading={loading} />
      <div className="top-heading mb-3">
        <h2
          style={{
            color: "#cf4036",
            fontWeight: "bold",
            fontSize: "2em",
            WebkitTextStroke: "0.5px #BD1307",
          }}
          className="animate__animated animate__bounceInDown"
        >
          Login
        </h2>
      </div>
      <div className="mt-5">
        {state == "LOGIN" ? (
          <Login
            changeStatus={async (name, mobileNumber) => {
              await sendOTPmessage(name, mobileNumber).then((res) => {
                setState("OTP");
              });
            }}
          />
        ) : (
          <OTP
            generatedOTP={generatedOTP}
            username={name}
            mobile={mobileNumber}
            serverRef={serverRef}
          />
        )}
      </div>

      <div className="animate__animated animate__backInUp mt-5">
        <img src={Logo} className="logo-img animate__slow" />
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </Container>
  );
};

export default LoginPage;

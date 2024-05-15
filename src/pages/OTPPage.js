import { Container } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import HomeImage from "../assets/images/ball.png";
import { Button, createStyles, TextField } from "@mui/material";
import { animateCSS } from "../animation/triggerAnimation";
import { useHistory } from "react-router-dom";
import Logo from "../assets/images/Logo-01.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CButton } from "@coreui/react";
const OTPPage = () => {
  const navigate = useHistory();
  const [name, setName] = useState("");
  const [otp, setOTP] = useState("");
  const [mobileValidationAlert, setMobileValidationAlert] = useState(false);

  const handleNextBtn = async () => {
    setMobileValidationAlert(false);

    if (otp == "") {
      animateCSS(".input-with-number", "jello", true, 0);
      return;
    }

    animateCSS(".input-container-number", "bounceOutLeft", true, 1000);
    animateCSS(".top-heading", "bounceOutUp", true, 1000);
    animateCSS(".next-btn", "bounceOutDown", true, 1000);
    animateCSS(".logo-img", "bounceOutDown", true, 1000);
    setTimeout(() => {
      // navigate.push('/selection')
      window.location.replace(
        "https://widget.ideabiz.lk/web/reg/initiate/f80afe230d921f615599cee2828f4532"
      );
    }, 1000);
  };

  const classes = (theme) =>
    createStyles({
      input: {
        "&::placeholder": {
          fontStyle: "italic",
          fontSize: "100px",
        },
      },
    });
  return (
    <Container style={{ textAlign: "center", marginTop: "10%" }} fixed>
      <div style={{ textAlign: "start" }}>
        <CButton
          color="danger"
          variant="outline"
          style={{ textAlign: "start", marginTop: "5%", cursor: "pointer" }}
          size="small"
          onClick={() => navigate.goBack()}
        >
          <ArrowBackIcon />
        </CButton>
      </div>
      <div className="top-heading">
        <h2
          style={{
            color: "#cf4036",
            fontWeight: "bold",
            fontSize: "2em",
            WebkitTextStroke: "0.5px #BD1307",
          }}
          className="animate__animated"
        >
          Login
        </h2>
      </div>

      <div
        style={{ marginTop: "60px" }}
        className="animate__animated animate__lightSpeedInLeft"
      >
        <div className="input-container-number">
          <p style={{ fontWeight: "bold", fontSize: "1em", color: "#fff" }}>
            OTP (One Time Password)
          </p>
          <div className="input-with-number">
            <TextField
              variant="standard"
              id="input-with-icon-adornment"
              className="input-field"
              placeholder="XXXX"
              onChange={(e) => setOTP(e.target.value)}
              type={"number"}
              value={otp}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={HomeImage} width={300} className="input-ball" />
                  </InputAdornment>
                ),
                disableUnderline: true,
                inputMode: "numeric",
              }}
            />

            {mobileValidationAlert ? (
              <p className="validation-msg animate__animated animate__slideInDown">
                Enter a valid mobile number !
              </p>
            ) : (
              <p></p>
            )}
            <p style={{ fontWeight: "bold", fontSize: "0.9em", color: "#fff" }}>
              We have sent an SMS to your phone
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="animate__animated ">
        <Button
          variant="contained"
          color="error"
          className="next-btn"
          onClick={() => handleNextBtn()}
        >
          LOGIN
        </Button>
      </div>

      <img src={Logo} className="logo-img " />
    </Container>
  );
};

export default OTPPage;

import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { WEB_URL } from "../config/const";

import HomeCricketImage from "../assets/images/home-image.png";
import LoadingFullscreen from "../components/LoadingFullscreen";
import { validateLoginFrimiUser } from "../services/user.service";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import HomeImage from "../assets/images/Logo-01.png";
import { animateCSS } from "../animation/triggerAnimation";
import { CLink } from "@coreui/react";

const ThirdPartyLoadingPage = () => {
  const navigate = useHistory();
  const location = useLocation();

  // Parse the query parameters
  const queryParams = new URLSearchParams(location.search);
  const uuid = queryParams.get("uuid");

  const [loading, setloading] = useState(false)
  useEffect(() => {
    // loginFirmi();
  }, []);

  const loginFirmi = async () => {
    try {
      const body = {
        uuid,
      };
      setloading(true)
      const response = await validateLoginFrimiUser(body);

      const { mobile, username } = response.data;

      if (!mobile || !username || !response.tag) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setloading(false)
        return;
      }

      if (response.tag != "FRIMI") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setloading(false)
        return;
      }



      localStorage.setItem("mycricq-username", username);
      localStorage.setItem("mycricq-mobile", mobile);
      localStorage.setItem("mycricq-tag", response.tag);
      window.location.replace(
        WEB_URL + "selection?ref=" + mobile + "&username=" + username
      );
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      setloading(false)
      // window.location.replace(WEB_URL);
    }
  };

  return (
    <Container style={{ textAlign: "center" }} fixed>
      <div className="start-content animate__slow">
        <div className="animate__animated animate__backInDown">
          <img
            src={HomeImage}
            className="home-img animate__animated animate__bounce  animate__1 animate__delay-4s"
          />
        </div>
        {/* <h2 style={{ color: '#BD1307', fontWeight: 'bold', fontSize: '2em' }} className="app-name animate__animated animate__lightSpeedInLeft animate__delay-1s">Cricket Game Application</h2> */}
      </div>
      <div className="animate__animated animate__backInDown">
        <div className="animate__animated animate__bounce  animate__1 animate__delay-5s">
          <img
            className="home-cricket-image  start-btn"
            onClick={() => loginFirmi()}
            src={HomeCricketImage}
          />
        </div>
      </div>
      <div className="animate__animated animate__backInUp animate__delay-1s">
        <div className="tc-btn animate__slow m-1">
          <CLink
            style={{
              cursor: "pointer",
              color: "#BD1307",
              fontWeight: "bold",
            }}
            onClick={() => {
              animateCSS(".tc-btn", "bounceOutDown", true, 1000);
              animateCSS(".faq-btn", "bounceOutUp", true, 1000);
              animateCSS(".start-btn", "bounceOutUp", true, 1000);
              animateCSS(".start-content", "bounceOutUp", true, 1000);
              setTimeout(() => {
                navigate.push("/tc");
              }, 1000);
            }}
          >
            Terms & Conditions
          </CLink>
          {"\t"}/ {"\t"}
          <CLink
            style={{
              cursor: "pointer",
              color: "green",
              fontWeight: "bold",
            }}
            onClick={() => {
              animateCSS(".tc-btn", "bounceOutDown", true, 1000);
              animateCSS(".faq-btn", "bounceOutUp", true, 1000);
              animateCSS(".start-btn", "bounceOutUp", true, 1000);
              animateCSS(".start-content", "bounceOutUp", true, 1000);
              setTimeout(() => {
                navigate.push("/faq");
              }, 1000);
            }}
          >
            FAQ
          </CLink>
        </div>
      </div>
      <LoadingFullscreen loading={loading} message="Validating User..." />
    </Container>
  );
};

export default ThirdPartyLoadingPage;

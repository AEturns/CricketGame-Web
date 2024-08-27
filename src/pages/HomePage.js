import { Button, Container } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { animateCSS } from "../animation/triggerAnimation";
import HomeImage from "../assets/images/Logo-01.png";
import { WEB_SUBSCRIPTION_PATH, WEB_URL } from "../config/const";
import { CCol, CImage, CLink, CRow, CWidgetStatsE } from "@coreui/react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import StatisticsWidgets from "../components/StatisticsWidgets";
import HomeCricketImage from "../assets/images/home-image.png";

const HomePage = () => {
  const navigate = useHistory();

  const handleStartBtn = async () => {
    animateCSS(".start-btn", "bounceOutDown", true, 1000);
    animateCSS(".faq-btn", "bounceOutUp", true, 1000);
    animateCSS(".start-content", "bounceOutUp", true, 1000);
    animateCSS(".tc-btn", "bounceOutDown", true, 1000);
    setTimeout(() => {
      if (
        localStorage.getItem("mycricq-mobile") &&
        localStorage.getItem("mycricq-username")
      )
        window.location.replace(
          WEB_URL +
            "selection?ref=" +
            localStorage.getItem("mycricq-mobile") +
            "&username=" +
            localStorage.getItem("mycricq-username")
        );
      else navigate.push("/login");
    }, 1000);
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
            onClick={() => handleStartBtn()}
            src={HomeCricketImage}
          />
        </div>
      </div>
      {/* <div
        className="mt-3 animate__animated animate__backInUp animate__delay-1s"
        style={{ zIndex: -1 }}
      >
        <StatisticsWidgets />
      </div> */}
      <div
        className="mt-3 animate__animated animate__backInUp animate__delay-1s"
        style={{
          backgroundColor: "white",
          marginInline: 350,
          padding: 12,
          borderRadius: 20,
        }}
      >
        <span style={{ color: "#BD1307", fontWeight: "bold", fontSize: 55 }}>
          <span style={{ fontWeight: "bold", fontSize: 30 }}>රු.</span>50,000
          <span style={{ fontWeight: "bold", fontSize: 15 }}>ක්</span>
        </span>
        <br />
        <span style={{ fontWeight: "bold" }}>
          දිනාගන්න. <span style={{ color: "green" }}>Play Now</span>{" "}
          බොත්තම ඔබන්න
        </span>
      </div>
      <div className="animate__animated animate__backInUp animate__delay-1s">
        {/* <Button
          variant="contained"
          color="error"
          className="start-btn animate__slow m-1"
          onClick={() => handleStartBtn()}
        >
          {localStorage.getItem("mycricq-mobile") &&
          localStorage.getItem("mycricq-username")
            ? "PLAY NOW"
            : "SUBSCRIBE TO PLAY"}
        </Button>
        <Button
          variant="contained"
          color="error"
          className="faq-btn animate__slow m-1"
          // style={{ borderRadius: "50%" }}
          onClick={() => {
            animateCSS(".faq-btn", "bounceOutDown", true, 1000);
            animateCSS(".start-btn", "bounceOutUp", true, 1000);
            animateCSS(".start-content", "bounceOutUp", true, 1000);
            animateCSS(".tc-btn", "bounceOutUp", true, 1000);
            setTimeout(() => {
              navigate.push("/faq");
            }, 1000);
          }}
        >
          FAQ
        </Button> */}
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
            {'\t'}/ {'\t'}
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
      </div>
    </Container>
  );
};

export default HomePage;

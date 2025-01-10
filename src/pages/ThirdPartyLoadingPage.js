import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { animateCSS } from "../animation/triggerAnimation";
import HomeImage from "../assets/images/Logo-01.png";
import { WEB_SUBSCRIPTION_PATH, WEB_URL } from "../config/const";
import { CCol, CImage, CLink, CRow, CWidgetStatsE } from "@coreui/react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import StatisticsWidgets from "../components/StatisticsWidgets";
import HomeCricketImage from "../assets/images/home-image.png";
import LoadingFullscreen from "../components/LoadingFullscreen";
import { validateLoginFrimiUser } from "../services/user.service";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ThirdPartyLoadingPage = () => {
  const navigate = useHistory();
  const location = useLocation();

  // Parse the query parameters
  const queryParams = new URLSearchParams(location.search);
  const uuid = queryParams.get("uuid");
  const mid = queryParams.get("mid");
  const lid = queryParams.get("lid");

  useEffect(() => {
    loginFirmi();
  }, []);

  const loginFirmi = async () => {
    try {
      const body = {
        uuid,
        mid,
        lid,
      };
      const response = await validateLoginFrimiUser(body);
      console.log(response);

      const { mobile, username, tag } = response;

      if (!mobile || !username || !tag) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        return;
      }

      if (tag != "FRIMI") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        return;
      }

      localStorage.setItem("mycricq-username", username);
      localStorage.setItem("mycricq-mobile", mobile);
      localStorage.setItem("mycricq-tag", tag);
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
    }
  };

  return (
    <Container style={{ textAlign: "center" }} fixed>
      <LoadingFullscreen loading={true} message="Validating User..." />
    </Container>
  );
};

export default ThirdPartyLoadingPage;

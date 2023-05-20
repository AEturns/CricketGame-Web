import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { useHistory } from "react-router";
import * as animationData from "../assets/lottie/107653-trophy.json";
import { LANGUAGE_ID, STRINGS, leaderboard } from "../config/const";
import { useEffect } from "react";
import { completeMatch, getLeaderBoard } from "../services/match.service";
import { completeMatchStatus } from "../util/scoreCalculator";
import Rank1 from "../assets/images/rank_1.png";
import Rank2 from "../assets/images/rank_2.png";
import Rank3 from "../assets/images/rank_3.png";
import { userSubscribe } from "../services/user.service";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Completed({ match }) {
  const navigate = useHistory();
  const [leaderBoard, setleaderBoard] = useState([]);
  const [gotLeaderBoard, setGotLeaderBoard] = useState(false);

  useEffect(() => {
    complete();
  }, [gotLeaderBoard]);

  const complete = () => {
    getLeaderBoardById();
    if (
      !JSON.parse(sessionStorage.getItem("mycricq-matchSession"))
        ?.isCompleted &&
      gotLeaderBoard
    ) {
      const matchData = JSON.parse(
        sessionStorage.getItem("mycricq-matchSession")
      );

      const mobile = localStorage.getItem("mycricq-mobile");
      const data = leaderBoard.find(
        (element) => element?.attributes?.mobile == mobile
      );
      console.log("dataInFind", data, leaderboard);
      completeMatch(
        localStorage.getItem("mycricq-username"),
        localStorage.getItem("mycricq-mobile"),
        Number(matchData.score),
        `${matchData.score}/${matchData.wickets}`,
        matchData.id,
        data ? data.id : null
      ).then((res) => {
        if (!data) {
          console.log("USER CREATED");
          console.log(res.data)
          userSubscribe(
            res?.data?.data?.id,
            localStorage.getItem("mycricq-mobile"),
            match.id,
            1,
            match.attributes.campaign_name
          ).then(() => {
            completeMatchStatus();
            getLeaderBoardById();
          });
        } else {
          console.log("USER UPDATED");
          completeMatchStatus();
          getLeaderBoardById();
        }
      });
    }
  };

  const getLeaderBoardById = async () => {
    getLeaderBoard(match.id).then((res) => {
      console.log("res", res.data);
      const data = res.data.attributes.leaderboards.data?.sort(function (a, b) {
        return b.attributes.points - a.attributes.points;
      });
      console.log(data);
      setleaderBoard(data);
      setGotLeaderBoard(true);
    });
  };

  const checkCurrentUser = (listMobile) => {
    const mobile = localStorage.getItem("mycricq-mobile");
    if (listMobile == mobile) return "red";
    else return "#fff";
  };

  return (
    <div>
      <div className="award-animation">
        <Lottie width={250} options={defaultOptions} />
      </div>
      <h1 className="score-label">SCORE</h1>
      <h1 className="score-points">
        {match.score} / {match.wickets}{" "}
      </h1>
      <p style={{ textAlign: "center", color: "#fff" }}>
        Leaderboard{" "}
        <h4 style={{ fontSize: "0.5em" }}>
          ({match.attributes.matchSize} /{match.attributes.matchSize} )
        </h4>
      </p>
      <p style={{ textAlign: "center", color: "#fff" }}>
        <h4 style={{ fontSize: "0.5em" }}>{match?.attributes?.last_message}</h4>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          height: "240px",
        }}
      >
        <List className="card-list-list completed-leaderboard">
          <ListItem disablePadding>
            <ListItemButton
              style={{ backgroundColor: "#1e2430", color: "#fff" }}
            >
              <ListItemText primary="Rank" />
              <ListItemText
                primary={STRINGS.NAME[LANGUAGE_ID]}
                style={{ textAlign: "left" }}
              />
              <ListItemText
                primary={STRINGS.HIGHEST_SCORE[LANGUAGE_ID]}
                style={{ textAlign: "right" }}
              />
            </ListItemButton>
          </ListItem>
          {leaderBoard.map((item, key) => (
            <ListItem disablePadding>
              <ListItemButton
                key={key}
                style={{ backgroundColor: "#2a3244", color: "#fff" }}
              >
                <ListItemText primary={<div>{key + 1} </div>} />
                <ListItemText
                  style={{ color: checkCurrentUser(item.attributes.mobile) }}
                  primary={item.attributes.player}
                />
                <ListItemText
                  primary={
                    <>
                      {item.attributes.score}
                      <img
                        style={{ marginLeft: 10 }}
                        src={
                          key == 0
                            ? Rank1
                            : key == 1
                            ? Rank2
                            : key == 2
                            ? Rank3
                            : ""
                        }
                        height={35}
                      />
                    </>
                  }
                  style={{ textAlign: "right" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>

        <Button
          variant="contained"
          color="error"
          className="mt-2"
          onClick={() => {
            navigate.push("/selection?ref=" + localStorage.getItem("mycricq-userRef"));
            sessionStorage.removeItem("mycricq-matchSession");
          }}
        >
          Play Another Match
        </Button>
        {/* <Button
          variant="contained"
          color="error"
          className="mt-2"
          onClick={() => {
            window.location.reload(false);
          }}
        ></Button> */}

    </div>
  );
}

export default Completed;

import { List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import { useHistory } from 'react-router';
import * as animationData from '../assets/lottie/107653-trophy.json'
import { leaderboard } from '../config/const';
import { useEffect } from 'react';
import { completeMatch, getLeaderBoard } from '../services/match.service';
import { completeMatchStatus } from '../util/scoreCalculator';
import Rank1 from '../assets/images/rank_1.png'
import Rank2 from '../assets/images/rank_2.png'
import Rank3 from '../assets/images/rank_3.png'

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function Completed({ match }) {
    const navigate = useHistory()
    const [leaderBoard, setleaderBoard] = useState([])

    useEffect(() => {

        if (!JSON.parse(sessionStorage.getItem('matchSession'))?.isCompleted) {
            const matchData = JSON.parse(sessionStorage.getItem('matchSession'))
            completeMatch(localStorage.getItem("username"), localStorage.getItem("mobile"), Number(matchData.score), `${matchData.score}/${matchData.wickets}`, matchData.id)
                .then(() => {
                    completeMatchStatus()
                    getLeaderBoardById()
                })

        } else {
            getLeaderBoardById()
        }

    }, [])

    const getLeaderBoardById = () => {
        getLeaderBoard(match.id)
            .then(res => {
                const data = res.data.attributes.leaderboards.data?.sort(function(a, b) { 
                    return b.attributes.points - a.attributes.points 
                  });
                setleaderBoard(data)
            })
    }

    return (
        <div >
            <div className='award-animation'>
                <Lottie
                    width={250}
                    options={defaultOptions}


                />
            </div>
            <h1 className='score-label'>SCORE</h1>
            <h1 className='score-points'>{match.score} / {match.wickets} </h1>
            <p style={{ textAlign: 'center', color: "#fff" }}>Leaderboard <h4 style={{ fontSize: '0.5em' }}>({match.attributes.matchSize} /{match.attributes.matchSize} )</h4></p>
            <p style={{ textAlign: 'center', color: "#fff" }}><h4 style={{ fontSize: '0.5em' }}>{match?.attributes?.last_message}</h4></p>
            <div style={{ display: 'flex', justifyContent: "center", overflow: "auto", height: "240px" }}>
                <List className='card-list-list completed-leaderboard' >
                    <ListItem disablePadding>
                        <ListItemButton style={{ backgroundColor: "#1e2430", color: "#fff" }}>
                            <ListItemText primary="Rank" />
                            <ListItemText primary="Name" style={{ textAlign: 'left' }}/>
                            <ListItemText primary="Highest Score" style={{ textAlign: 'right' }} />
                        </ListItemButton>

                    </ListItem>
                    {leaderBoard.map((item, key) => (
                        <ListItem disablePadding>
                            <ListItemButton key={key} style={{ backgroundColor: "#2a3244", color: "#fff" }}>
                                <ListItemText  primary={<div>{key + 1}<img style={{ marginLeft: 10 }} src={key == 0 ? Rank1 : (key == 1 ? Rank2 : (key == 2 ? Rank3 : ''))} height={35} /></div>} />
                                <ListItemText primary={item.attributes.player} />
                                <ListItemText primary={`${item.attributes.score}`} style={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </div>
            <Button variant="contained" color="error"
                onClick={() => {

                    navigate.push('/selection')
                    sessionStorage.removeItem("matchSession")
                }}
            >
                Play Another Match
            </Button>

        </div>


    )
}

export default Completed
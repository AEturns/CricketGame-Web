import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CModal, CModalBody } from '@coreui/react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, createTheme, List, ListItem, ListItemButton, ListItemText, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Redirect, useHistory, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { animateCSS } from '../animation/triggerAnimation'
import Logo from '../assets/images/Logo-01.png'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GamepadIcon from '@mui/icons-material/Gamepad';
import { LANGUAGE_ID, leaderboard, matches, STRINGS } from '../config/const'



const MatchSelectionPage = () => {

    const navigate = useHistory()
    const [open, setOpen] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(0)

    const [leaderboardVisible, setLeaderboardVisible] = useState(false)

    const handleStartBtn = async (match) => {
        Swal.fire({
            title: `MATCH ${match.matchSize}/${match.matchSize}`,
            html: rulesGenerator(match.rules),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#bbb',
            confirmButtonText: match.id != JSON.parse(sessionStorage.getItem('matchSession'))?.id ? 'Play Now' : 'Continue Match'
        }).then((result) => {
            if (result.isConfirmed) {
                animateCSS(".start-btn", 'bounceOutDown', true, 1000)
                animateCSS(".start-content", 'flipOutY', true, 1000)

                setTimeout(
                    () => {
                        if (match.id != JSON.parse(sessionStorage.getItem('matchSession'))?.id)
                            sessionStorage.setItem("matchSession", JSON.stringify({ ...match, current: 1, score: 0, wickets: 0 }));
                        navigate.push('/match')
                    },
                    3000
                );
            }
        })
        // setOpen(false)

    }

    const rulesGenerator = (rules) => {
        let html = `<div style="text-align:left">Rules: <ul>`
        rules.forEach(element => {
            html = html + `<li>${element}</li>`
        });
        return html + '</ul></div>'
    }

    const theme = createTheme({
        components: {
            MuiIcon: {
                styleOverrides: {
                    root: {
                        // Match 24px = 3 * 2 + 1.125 * 16
                        boxSizing: 'content-box',
                        padding: 3,
                        fontSize: '1.125rem',
                        cursor: 'pointer'
                    },
                },
            },
        },
    });

    return !localStorage.getItem("username") ? <Redirect replace to="/login" /> : (
        <Container className='margin-issue' style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '3%' }} fixed>
            <CModal style={{ marginTop: "15%", background: 'none', border: 0 }} visible={leaderboardVisible} onClose={() => setLeaderboardVisible(false)}>

                <CModalBody className='leaderboard-modal p-4'  >
                    <h2 style={{ textAlign: 'center' }}>Leaderboard <h4 style={{ fontSize: '0.5em' }}>(Match 10/10)</h4></h2>
                    <List className='card-list-list' >
                        <ListItem disablePadding>
                            <ListItemButton style={{ backgroundColor: "#1e2430" }}>
                                <ListItemText primary="Name" />
                                <ListItemText primary="Highest Score" style={{ textAlign: 'right' }} />
                            </ListItemButton>

                        </ListItem>
                        {leaderboard.map((item, key) => (
                            <ListItem disablePadding>
                                <ListItemButton key={key}>
                                    <ListItemText primary={item.name} />
                                    <ListItemText primary={item.score} style={{ textAlign: 'right' }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                            onClick={() => setLeaderboardVisible(false)}
                            color='error'
                        >
                            Close
                        </Button>
                    </div>

                </CModalBody>


            </CModal>
            <div className='start-content animate__slow'>
                <div className='top-heading'>
                    <h2 style={{ color: '#cf4036', fontWeight: 'bold', fontSize: '2em', WebkitTextStroke: "0.5px #BD1307" }} className="animate__animated animate__bounceInDown">{STRINGS.MATCH_SELECTION_HEADING[LANGUAGE_ID]}</h2>
                </div>
                <div className='card-list animate__animated animate__backInDown'>
                    <List className='card-list-list'>
                        {matches.map((match, key) => (
                            <ListItem component="div" disablePadding>
                                <Card key={key} sx={{ width: 300, height: 265, borderRadius: 10, boxShadow: '10px 10px 20px rgb(56, 41, 41)', textAlign: "center" }} className='animate__animated animate__backInDown mb-5'>
                                    <CardActionArea

                                    >
                                        <CardMedia
                                            component="img"
                                            height="120"
                                            image={match.image}
                                            alt={match.matchSize}
                                            onClick={() => {
                                                handleStartBtn(match)
                                            }}
                                        />

                                        <CardContent className='match-card-content'>


                                            <Typography gutterBottom variant="h6" component="div">
                                                MATCH {match.matchSize}/{match.matchSize}
                                            </Typography>
                                            <Typography gutterBottom variant="h8" component="div" >
                                                <span>Win Prize Rs. {match.winPrize}</span>
                                                <p style={{ fontSize: '0.5em', paddingBottom: 5, margin: 0 }}>
                                                    (Time Period : {match.startTime} - {match.endTime})
                                                </p>
                                            </Typography>

                                            <Typography variant="body2" style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                <ThemeProvider theme={theme}>
                                                    <Chip style={{ color: "white", cursor: 'pointer' }}
                                                        icon={<EmojiEventsIcon style={{ color: "white" }} />}
                                                        onClick={() => {
                                                            setLeaderboardVisible(!leaderboardVisible)
                                                        }}
                                                        label="Leaderboard" />
                                                </ThemeProvider>

                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        style={{ color: "white", cursor: 'pointer' }}
                                                        icon={<GamepadIcon style={{ color: "white" }} />}
                                                        onClick={() => {
                                                            handleStartBtn(match)
                                                        }}
                                                        label="Play" />
                                                </ThemeProvider>

                                            </Typography>
                                            {/* <Typography variant="body2" >
                                                        Time Period : {match.startTime} - {match.endTime}
                                                    </Typography> */}
                                        </CardContent>

                                    </CardActionArea>
                                </Card>
                            </ListItem>
                        ))}
                    </List>




                </div>
                <div className="mt-5 animate__animated animate__bounce  animate__1 animate__delay-5s">
                    <img src={Logo} className="logo-img" />
                    <span style={{ color: "#fff", fontSize: "0.8em", padding: 0, margin: 3, display: "flex", justifyContent: 'center' }}>
                        <span style={{paddingTop: "5px"}}>Logged In As: </span>
                        <CDropdown style={{ marginLeft: "10px" }} variant="input-group" placement='top' direction="dropup-center">
                            <CDropdownToggle variant="ghost" placement="bottom-end" style={{ padding: 0, marginLeft: "10px", marginBottom: "10px" }} caret={false}>
                                <span style={{ color: "#cf4036", fontWeight: 'bold', fontSize: "0.7em", paddingBottom: "1000px" }}>{localStorage.getItem("username")}</span>
                            </CDropdownToggle>
                            <CDropdownMenu className="pt-0" placement="bottom-end">
                                <CDropdownItem onClick={() => {
                                    localStorage.removeItem("username")
                                    window.location.reload(false);
                                }
                                } style={{ color: 'red', cursor: 'pointer' }}>
                                    {/* <CIcon icon={cilAccountLogout} className="me-2 " /> */}
                                    Logout
                                </CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>

                    </span>
                </div>
            </div>


        </Container>

    )
}

export default MatchSelectionPage
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CModal, CModalBody } from '@coreui/react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, createTheme, List, ListItem, ListItemButton, ListItemText, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { animateCSS } from '../animation/triggerAnimation'
import Logo from '../assets/images/Logo-01.png'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GamepadIcon from '@mui/icons-material/Gamepad';
import { LANGUAGE_ID, leaderboard, MAIN_API, MAIN_PROXY_API, matches, STRINGS } from '../config/const'
import { getAllMatches } from '../services/match.service'
import moment from 'moment/moment'
import Rank1 from '../assets/images/rank_1.png'
import Rank2 from '../assets/images/rank_2.png'
import Rank3 from '../assets/images/rank_3.png'
import Trophy from '../assets/images/trophy.png'

const MatchSelectionPage = () => {

    const navigate = useHistory()
    const [open, setOpen] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(null)
    const [selectedLeaderBoard, setSelectedLeaderBoard] = useState([])
    const [leaderboardVisible, setLeaderboardVisible] = useState(false)
    const [allMatches, setAllMatches] = useState([])
    useEffect(() => {
        getAllMatches()
            .then(res => {
                setAllMatches(res.data)
            })
    }, [])


    const handleStartBtn = async (match) => {
        Swal.fire({
            title: match.attributes.campaign_name,
            html: rulesGenerator(match.attributes.rules),
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
                            sessionStorage.setItem("matchSession", JSON.stringify({ ...match, current: 1, score: 0, wickets: 0, answeredQuestions: [], isCompleted: false }));
                        navigate.push('/match')
                    },
                    3000
                );
            }
        })
        // setOpen(false)

    }

    const rulesGenerator = (rules) => {
        if (rules?.length == 0)
            return ''
        let html = `<div style="text-align:left">Rules: <ul>`
        rules.forEach(element => {
            html = html + `<li>${element.rule}</li>`
        });
        return html + '</ul></div>'
    }

    const checkLeaderboard = (leaderboard) => {

        const mobile = localStorage.getItem('mobile')
        const data = leaderboard.find(element => element.attributes.mobile == mobile)

        if (!data) return true
        else {
            let updatedDate = new Date(data.attributes.updatedAt)
            updatedDate.setDate(updatedDate.getDate() + 1)
            if (updatedDate < new Date()) return true
            else return false
        }

    }

    const handleLeaderBoard = (leaderBoard) => {
        const data = leaderBoard.sort(function (a, b) {
            return b.attributes.points - a.attributes.points
        });
        setSelectedLeaderBoard(data)
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
                    <h2 style={{ textAlign: 'center' }}><img style={{ marginRight: 25 }} src={Trophy} height={35} />Leaderboard <img style={{ marginLeft: 20 }} src={Trophy} height={35} /><h4 style={{ fontSize: '0.5em' }}>({selectedMatch?.attributes.campaign_name})</h4></h2>
                    {selectedLeaderBoard?.length == 0 ? <p style={{ textAlign: 'center', marginTop: '40px' }}>Haven't Played Anyone Yet</p> :
                        <List className='card-list-list' >
                            <ListItem disablePadding>
                                <ListItemButton style={{ backgroundColor: "#1e2430" }}>
                                    <ListItemText primary="Rank" />
                                    <ListItemText primary="Name" style={{ textAlign: 'center' }} />
                                    <ListItemText primary="Highest Score" style={{ textAlign: 'right' }} />
                                </ListItemButton>

                            </ListItem>
                            {selectedLeaderBoard.map((item, key) => (
                                <ListItem disablePadding>
                                    <ListItemButton key={key}>
                                        <ListItemText primary={<div>{key + 1}<img style={{ marginLeft: 10 }} src={key == 0 ? Rank1 : (key == 1 ? Rank2 : (key == 2 ? Rank3 : ''))} height={35} /></div>} />
                                        <ListItemText primary={item.attributes.player} />
                                        <ListItemText primary={item.attributes.score} style={{ textAlign: 'right' }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    }
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
                        {allMatches.map((match, key) => (
                            <ListItem component="div" disablePadding>
                                <Card key={key} sx={{ width: 300, height: 265, borderRadius: 10, boxShadow: '10px 10px 20px rgb(56, 41, 41)', textAlign: "center" }} className='animate__animated animate__backInDown mb-5'>
                                    <CardActionArea

                                    >
                                        <div style={{ position: 'relative', textAlign: 'center', color: 'red', fontSize: '2em', fontWeight: 'bolder', WebkitTextStroke: '1px #000' }}>
                                            <CardMedia
                                                component="img"
                                                height="120"
                                                image={MAIN_PROXY_API + match.attributes.wallpaper.data[0].attributes.url}
                                                alt={match.attributes.campaign_name}
                                                onClick={() => {
                                                    if (checkLeaderboard(match.attributes.leaderboards.data)) handleStartBtn(match)
                                                }}
                                            />
                                            <div hidden={checkLeaderboard(match.attributes.leaderboards.data)} style={{ position: 'absolute', top: '25px', right: '14px', transform: 'rotate(30deg)' }} class="bottom-left">Played</div>
                                        </div>

                                        <CardContent className='match-card-content'>


                                            <Typography gutterBottom variant="h6" component="div">
                                                {match.attributes.campaign_name}

                                            </Typography>
                                            <Typography gutterBottom variant="h8" component="div" >
                                                <span>Win Prize Rs. {match.attributes.prize}</span>
                                                <p style={{ fontSize: '0.5em', paddingBottom: 5, margin: 0 }}>
                                                    (Time Period : {moment(match.attributes.start_time).format("DD MM YYYY")} - {moment(match.attributes.end_time).format("DD MM YYYY")})
                                                </p>
                                            </Typography>

                                            <Typography variant="body2" style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                <ThemeProvider theme={theme}>
                                                    <Chip style={{ color: "white", cursor: 'pointer' }}
                                                        icon={<EmojiEventsIcon style={{ color: "white" }} />}
                                                        onClick={() => {
                                                            setSelectedMatch(match)
                                                            handleLeaderBoard(match.attributes.leaderboards.data)
                                                            setLeaderboardVisible(!leaderboardVisible)
                                                        }}
                                                        label="Leaderboard" />
                                                </ThemeProvider>

                                                <ThemeProvider theme={theme}>
                                                    {checkLeaderboard(match.attributes.leaderboards.data) ? <Chip
                                                        style={{ color: "white", cursor: 'pointer' }}
                                                        icon={<GamepadIcon style={{ color: "white" }} />}
                                                        onClick={() => {
                                                            handleStartBtn(match)
                                                        }}
                                                        label="Play" /> : null}
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
                        <span style={{ paddingTop: "5px" }}>Logged In As: </span>
                        <CDropdown style={{ marginLeft: "10px" }} variant="input-group" placement='top' direction="dropup-center">
                            <CDropdownToggle variant="ghost" placement="bottom-end" style={{ padding: 0, marginLeft: "10px", marginBottom: "10px" }} caret={false}>
                                <span style={{ color: "#cf4036", fontWeight: 'bold', fontSize: "0.7em", paddingBottom: "1000px" }}>{localStorage.getItem("username")}</span>
                            </CDropdownToggle>
                            <CDropdownMenu className="pt-0" placement="bottom-end">
                                <CDropdownItem onClick={() => {
                                    localStorage.removeItem("username")
                                    localStorage.removeItem("mobile")
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
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Ball from '../assets/images/ball.png'
import { styled } from '@mui/material/styles';
import { CButton, CModal, CModalFooter } from '@coreui/react';
import Lottie from 'lottie-react';
import * as animationData from '../assets/lottie/77706-wicket.json'
import * as animationOne from '../assets/lottie/78820-number-1-animation.json'
import * as animationTwo from '../assets/lottie/115328-number-2-liquid-effect.json'
import * as animationSix from '../assets/lottie/77705-score-6.json'
import * as animationFour from '../assets/lottie/77707-scored-4.json'
import * as animationOut from '../assets/lottie/82818-cricket-bowled-out.json'
import * as animationOutText from '../assets/lottie/13490-cricket-out-animation.json'
import Countdown from 'react-countdown';
import { scoreChange } from '../util/scoreCalculator';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from 'react-router';
import { getQuestion } from '../services/match.service';

const AnswerButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 'bolder',
    padding: 5,
    width: 300,
    textAlign: 'start',
    justifyContent: 'start',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'aliceblue',
    borderColor: '#BD1307',
    borderWidth: 3,
    borderRadius: 50,
    boxShadow: '10px 10px 20px rgb(56, 41, 41)',
    color: '#BD1307',
    '&:hover': {
        backgroundColor: '#b5bcc2',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#b5bcc2',
        borderColor: '#b5bcc2',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem b5bcc2',
    },
});


const answers = [
    {
        id: 1,
        answer: "Imran Khan"
    },
    {
        id: 2,
        answer: "Ramiz Raja"
    },
    {
        id: 3,
        answer: "Inzamam-ul"
    },
    {
        id: 4,
        answer: "Iqbal Sikander"
    }
]


function Quiz({ changeStatus, run }) {

    const [open, setOpen] = useState(false)
    const [selectAnimation, setSelectAnimation] = useState(animationData)
    const [isWicket, setIsWicket] = useState(true)
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const checkAnswer = (id) => {
        if (id == correctAnswer) {
            setIsWicket(false)
            setSelectAnimation(run == 6 ? animationSix : (run == 4 ? animationFour : (run == 2 ? animationTwo : animationOne)))
        }
        setOpen(true)
    }

    const handleEventPlayer = (e) => {

    }

    useEffect(() => {
      getQuestion(run, null)
      .then(res => {
        console.log("res", res)
        setQuestion(res.question)
        setCorrectAnswer(Number(res.correct_answer))
        const mockAnswers = [
            {
                id: 1,
                answer: res.answer_1
            },
            {
                id: 2,
                answer: res.answer_2
            },
            {
                id: 3,
                answer: res.answer_3
            },
            {
                id: 4,
                answer: res.answer_4
            }
        ]

        setAnswers(mockAnswers)
      })
    }, [])
    
    useEffect(() => {
        const unloadCallback = (event) => {
          event.preventDefault();
          console.log(event)
          event.returnValue = "";
          return "";
        };
      
        window.addEventListener("beforeunload", unloadCallback);
        return () => {
            window.removeEventListener("beforeunload", unloadCallback)
        }
      }, []);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            setSelectAnimation(animationOut)
            setOpen(true)
            setTimeout(
                () => {
                    setSelectAnimation(animationOutText)
                },
                4000
            );
            return <h1 style={{ color: "red", fontSize: '0.8em', margin: "10px", fontWeight: "bold" }}>{0}:{0}</h1>;
        } else {
            // Render a countdown
            if (minutes == 0 && seconds < 4) {
                return <h1 className='animate__animated animate__pulse' style={{ color: "red", fontSize: '0.8em', margin: "10px", fontWeight: "bold" }}>{minutes}:{seconds}</h1>;
            } else {
                return <div className='animate__animated animate__pulse' ><h1 style={{ color: "#fff", fontSize: '0.8em', margin: "10px", fontWeight: "bold" }}>{minutes}:{seconds}</h1></div>;
            }


        }
    };
    const navigate = useHistory()
    const exitMatch = () => {
        navigate.push('/selection')

    }
    return (
        <>
            <CModal size="lg" style={{ marginTop: "10%", backgroundColor: "rgba(0, 0, 0, 0.5)", background: 'none', border: 0 }} backdrop={"static"} visible={open} onClose={() => setOpen(false)}>
                <Lottie
                    loop={false}
                    autoplay={true}
                    height={100}
                    className="match-animation"
                    animationData={selectAnimation}

                />


                <CModalFooter style={{ display: 'flex', justifyContent: "center", marginTop: "50px", border: 0 }}>
                    <CButton style={{ color: "#fff", borderRadius: "50%", height: "150px", width: "150px", fontWight: "bold", boxShadow: "10px 10px 20px rgb(56, 41, 41)" }} color="danger" onClick={() => {
                        setOpen(false)
                        scoreChange(run, isWicket)
                        changeStatus()
                    }}>
                        Next
                        <br />
                        Question
                    </CButton>
                </CModalFooter>


            </CModal>

            <div className='points animate__animated animate__bounceInDown'>
                <Button  color="error" size="small" style={{height: 45, width: 20, marginTop: "10px"}} onClick={() => exitMatch()}>
                <ExitToAppIcon style={{fontSize: '3em'}} />
                </Button>
                <div style={{ position: 'relative' }}>
                    <img src={Ball} width={60} height={60} className="time-ball" />
                    <div style={{ position: 'absolute', top: "45%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <Countdown
                            date={Date.now() + 60000}
                            renderer={renderer}
                        />
                    </div>
                </div>

                <Box
                    sx={{
                        width: 70,
                        height: "auto",
                        backgroundColor: '#BD1307',
                        borderRadius: "10px"
                    }}
                >

                    <p style={{ color: "#fff", fontWeight: 'bold', fontSize: "1.2em", margin: 5 }}>{JSON.parse(sessionStorage.getItem("matchSession")).score} / {JSON.parse(sessionStorage.getItem("matchSession")).wickets}</p>
                    <hr style={{ borderWidth: "2px", borderColor: "#fff", opacity: 100, padding: 0, margin: 0 }} />
                    <p style={{ color: "#fff", fontWeight: 'bold', fontSize: "0.5em", margin: 5 }}> Balls {JSON.parse(sessionStorage.getItem("matchSession")).current}/{JSON.parse(sessionStorage.getItem("matchSession")).matchSize}</p>

                </Box>
            </div>
            <br />
            <div className='question animate__animated animate__lightSpeedInRight'>
                <h3 className='question' style={{ color: "#fff" }}>{question}</h3>
            </div>
            <div className='input-container-number mt-4 '>
                {answers.map((item, key) => (
                    <div key={key} className='input-with-number animate__animated animate__lightSpeedInLeft mb-3'>
                        <div>
                            <AnswerButton
                                className='aBtn'
                                color='primary'
                                variant="contained"
                                onClick={() => checkAnswer(item.id)}
                                startIcon={<img src={Ball} width={300} className="answer-ball" />}>
                                {item.answer}
                            </AnswerButton>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Quiz
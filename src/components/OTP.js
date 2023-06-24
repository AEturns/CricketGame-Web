import { Button, createStyles, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { animateCSS } from '../animation/triggerAnimation';
import BallImage from '../assets/images/ball.png';
import { LANGUAGE_ID, STRINGS } from '../config/const';
import { validateOTP } from '../services/otp.service';
function OTP({ generatedOTP, username, mobile, serverRef }) {
    const navigate = useHistory()
    const [name, setName] = useState("")
    const [otp, setOTP] = useState("")
    const [mobileValidationAlert, setMobileValidationAlert] = useState(false)
    const [snackBarState, setSnackBarState] = useState({
        open: false,
        vertical: "bottom",
        horizontal: "center",
        message: "",
      });
    const handleNextBtn = async () => {
        setMobileValidationAlert(false)

        if (otp == "") {
            animateCSS(".input-with-number", 'jello', true, 0)
            return
        }

        // if (otp != generatedOTP) {
        //     setMobileValidationAlert(true)
        //     if (mobileValidationAlert)
        //         animateCSS(".input-with-number", 'jello', true, 0)

        //     return
        // }

        await validateOTP(otp, serverRef)
        .then((res) => {
    
            animateCSS(".input-container-number", 'bounceOutLeft', true, 1000)
            animateCSS(".top-heading", 'bounceOutUp', true, 1000)
            animateCSS(".next-btn", 'bounceOutDown', true, 1000)
            animateCSS(".logo-img", 'bounceOutDown', true, 1000)
            setTimeout(
                () => {
                    localStorage.setItem("mycricq-username", username)
                    localStorage.setItem("mycricq-mobile", mobile)
                    window.location.replace('https://widget.ideabiz.lk/web/reg/initiate/f80afe230d921f615599cee2828f4532')
                },
                1000
            );
        })
        .catch((e) => {
          setSnackBarState({
            open: true,
            vertical: "bottom",
            horizontal: "center",
            message: e.message,
          });
        });


    }

    const classes = (theme) => createStyles({
        input: {
            '&::placeholder': {
                fontStyle: 'italic',
                fontSize: '100px'
            },
        },
    });
    return (
        <>
            <div style={{ marginTop: '60px' }} className='animate__animated animate__lightSpeedInLeft'>
                <div className='input-container-number'>
                    {/* <span style={{ fontWeight: 'bold', fontSize: '0.6em', color: "#000" }}>{generatedOTP}</span> */}
                    <p style={{ fontWeight: 'bold', fontSize: '1em', color: "#fff" }}>{STRINGS.OTP_HEADING[LANGUAGE_ID]}</p>
                    <div className='input-with-number'>
                        <TextField
                            variant="standard"
                            id="input-with-icon-adornment"
                            className='input-field'
                            placeholder='XXXXXX'
                            onChange={(e) => setOTP(e.target.value)}
                            type={"number"}
                            value={otp}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={BallImage} width={300} className="input-ball" />
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                                inputMode: 'numeric'

                            }}

                        />

                        {mobileValidationAlert ?
                            <span className='validation-msg-otp'><p className='validation-msg animate__animated animate__slideInDown'>{STRINGS.INVALID_OTP_MESSAGE[LANGUAGE_ID]}</p></span> :
                            <p></p>}
                        <p style={{ fontWeight: 'bold', fontSize: '0.9em', color: "#fff" }}>{STRINGS.OTP_MESSAGE[LANGUAGE_ID]}</p>
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated '>
                <Button
                    variant="contained"
                    color="error"
                    className="next-btn"
                    onClick={() => handleNextBtn()}
                >
                    LOGIN
                </Button>
            </div>
        </>
    )
}

export default OTP
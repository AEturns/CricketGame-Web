import { Button, createStyles, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { animateCSS } from '../animation/triggerAnimation'
import BallImage from '../assets/images/ball.png';
import { checkTestUsers, LANGUAGE_ID, STRINGS, WEB_SUBSCRIPTION_PATH, WEB_URL } from '../config/const';
import { CButton } from '@coreui/react';

function Login({changeStatus}) {

    const navigate = useHistory()
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [mobileValidationAlert, setMobileValidationAlert] = useState(false)


    const handleNextBtn = async () => {
        setMobileValidationAlert(false)
        if (name == "") {
            animateCSS(".input-with-name", 'jello', true, 0)
            return
        }

        if (mobileNumber == "") {
            animateCSS(".input-with-number", 'jello', true, 0)
            return
        }

    
        animateCSS(".input-container-name", 'bounceOutRight', true, 1000)
        animateCSS(".input-container-number", 'bounceOutLeft', true, 1000)

        animateCSS(".top-heading", 'bounceOutUp', true, 1000)
        animateCSS(".logo-img", 'bounceOutDown', true, 1000)
        animateCSS(".next-btn", 'bounceOutDown', true, 1000)
        if(checkTestUsers(name, mobileNumber)) {
            setTimeout(
                () => {
                    localStorage.setItem("mycricq-username", name)
                    localStorage.setItem("mycricq-mobile", mobileNumber)
                    window.location.replace(WEB_URL + "selection?ref=" + mobileNumber + "&username=" + name)
                    // window.location.replace('https://widget.ideabiz.lk/web/reg/initiate/f80afe230d921f615599cee2828f4532')
                },
                1000
            );
            return
        }

        
        setTimeout(
            () => {
                changeStatus(name, mobileNumber)
                // window.location.replace(WEB_SUBSCRIPTION_PATH + "?request-ref=" + name)
            },
            1000
        );
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
        
            <div className='animate__animated animate__lightSpeedInLeft mt-3'>
                <div className='input-container-name'>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1em',   color: "#cf4036", }}>{STRINGS.NAME[LANGUAGE_ID]}</p>
                    <div className='input-with-name'>
                        <TextField
                            variant="standard"
                            className='input-field'
                            placeholder='John Doe'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={BallImage} width={300} className="input-ball" />
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                                classes: { input: classes.input }

                            }}

                        />
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated animate__lightSpeedInLeft'>
                <div className='input-container-number mt-2'>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: "#cf4036", }}>{STRINGS.MOBILE_NUMBER[LANGUAGE_ID]}</p>
                    <div className='input-with-number'>
                        <TextField
                            variant="standard"
                            id="input-with-icon-adornment"
                            className='input-field'
                            placeholder='07XXXXXXXX'
                            onChange={(e) => setMobileNumber(e.target.value)}
                            value={mobileNumber}
                            pattern="[0-9]*"
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
                        {mobileValidationAlert ? <p className='validation-msg animate__animated animate__slideInDown'>{STRINGS.VALID_MOBILE_MESSAGE[LANGUAGE_ID]}</p> : <p></p>}
                    </div>
                </div>
            </div>
            {/* <div style={{color: "white", fontSize: "0.8em"}}>
            <span >Rs. 6.00 + taxes daily</span> <br />
            <span >Rs. 180.00 + taxes monthly</span> <br />
            <span >(Auto renewal)</span>
            </div> */}
            
            {/* <br /> */}
            <div className='animate__animated animate__backInUp '>
                <Button
                    variant="contained"
                    color="error"
                    className="next-btn"
                    onClick={() => handleNextBtn()}
                >
                    NEXT
                </Button>
                
            </div>
            <span style={{fontSize: '12px'}}>දිනකට රු6 + අදාල බදු අය වේ</span>
        </>
    )
}

export default Login
import axios from "axios";
import { API_PATHS } from "../config/const";

const sendOTP = async (mobileNo) => {
    const URL = API_PATHS.SUBSCRIBE_OTP
    try {
        const body = {
            mobile: mobileNo,
        }
        
        const response = await axios.post(URL, body)
        return response?.data
    } catch (e) {
        return e
    }
}

const validateOTP = async (mobile, otp, serverRef) => {
    const URL = API_PATHS.VALIDATE_OTP
    try {
        const body = {
            otp,
            mobile,
            serverRef
        }
        
        const response = await axios.post(URL, body)
        return response?.data
    } catch (e) {
        throw e
    }
}

export { sendOTP, validateOTP }
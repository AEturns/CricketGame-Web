import axios from "axios";
import { API_PATHS } from "../config/const";

const sendOTP = async (message, mobileNo) => {
    const URL = API_PATHS.SEND_SMS_URL
    try {
        const body = {
            message: message,
            mobile: mobileNo
        }
        const response = await axios.post(URL, body)
        return response?.data
    } catch (e) {
        return e
    }
}

export { sendOTP }
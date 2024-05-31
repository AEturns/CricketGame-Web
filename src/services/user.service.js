import axios from "axios";
import { API_PATHS } from "../config/const";

const loginRegister = async (username, password) => {

    const data = { username, password }

    try {
    const response = await axios.post(API_PATHS.LOGIN_REGISTER_URL, data)
    return response.data
    } catch (e) {
        console.log(e)
    }
}

const userSubscribe = async (userId, mobile, campaignId, status, matchName) => {

    const data = { userId, mobile, campaignId, matchName }

    try {
    const response = await axios.post(status ? API_PATHS.USER_SUBSCRIBE_URL : API_PATHS.USER_UNSUBSCRIBE_URL, data)
    return response.data
    } catch (e) {
        console.log(e)
    }
}

const userUnsubscribeFromApp = async (mobile, serverRef) => {

    const data = { mobile, serverRef }

    try {
    const response = await axios.post(API_PATHS.USER_UNSUBSCRIBE_FROM_APP_URL, data)
    return response.data
    } catch (e) {
        throw e
    }
}

const getUserStats = async () => {

    try {
    const response = await axios.get(API_PATHS.USER_STAT)
    return response.data
    } catch (e) {
        throw e
    }
}

const getPreviouseWinners = async () => {

    try {
    const response = await axios.get(API_PATHS.WINNERS)
    return response.data
    } catch (e) {
        throw e
    }
}



// const userCheckFromIdeaBiz = async (userRef) => {

//     const data = { mobile }

//     try {
//     const response = await axios.get(API_PATHS.USER_UNSUBSCRIBE_FROM_APP_URL, data)
//     return response.data
//     } catch (e) {
//         throw e
//     }
// }

export {
    loginRegister,
    userSubscribe,
    userUnsubscribeFromApp,
    getUserStats,
    getPreviouseWinners
}
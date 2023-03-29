import axios from "axios";
import { API_PATHS } from "../config/const";

const getAllMatches = async () => {
    try {
        const response = await axios.get(API_PATHS.ALL_MATCHES_URL)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

const getQuestion = async (selectedRun, answeredQuestions) => {

    const data = { selectedRun, answeredQuestions }

    try {
        const response = await axios.get(API_PATHS.GET_QUESTION_URL + selectedRun)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

const validateAnswers = async (questionId, answer) => {

    const data = { questionId, answer }

    try {
        const response = await axios.post(API_PATHS.VALIDATE_ANSWER_URL, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

const completeMatch = async (userId, score, wickets) => {

    const data = { userId, score, wickets }

    try {
        const response = await axios.post(API_PATHS.COMPLETE_MATCH_URL, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export {
    getAllMatches,
    validateAnswers,
    getQuestion,
    completeMatch
}
const MAIN_API = process.env.REACT_APP_API_PATH
export const MAIN_PROXY_API = process.env.REACT_APP_API_PROXY_PATH
const SMS_API = process.env.REACT_APP_SMS_PATH
const SMS_CREDENTIALS = {
    USERNAME: process.env.REACT_APP_SMS_USERNAME,
    PASSWORD: process.env.REACT_APP_SMS_PASSWORD,
    FROM: process.env.REACT_APP_SMS_FROM
}

export const API_PATHS = {
    LOGIN_REGISTER_URL: MAIN_API,
    ALL_MATCHES_URL: MAIN_API + 'campaigns?populate=leaderboards&populate=rules&populate=wallpaper',
    GET_QUESTION_URL: MAIN_API + 'question/random/',
    GET_LEADERBOARD_URL: MAIN_API + 'campaigns/',
    VALIDATE_ANSWER_URL: MAIN_API,
    COMPLETE_MATCH_URL: MAIN_API + 'leaderboards',
    SEND_SMS_URL: SMS_API + '?username=' + SMS_CREDENTIALS.USERNAME + '&password=' + SMS_CREDENTIALS.PASSWORD + '&from=' + SMS_CREDENTIALS.FROM
}

export const LANGUAGE_ID = 1

export const STRINGS = {
    MATCH_SELECTION_HEADING: ['Please Select Your Match','Please Select Your Match'],
    WIN_PRIZE: ['Win Prize', 'දිනුම් මිල'],
    TIME_PERIOD: ['Time Period','කාල සීමාව'],
    NAME: ['Name', 'නම'],
    HIGHEST_SCORE: ['Highest Score', 'වැඩිම ලකුණු'],
    MOBILE_NUMBER: ['Mobile Number','දුරකථන අංකය'],
    VALID_MOBILE_MESSAGE: ['Enter a valid mobile number !', 'වලංගු ජංගම දුරකථන අංකයක් ඇතුළත් කරන්න !'],
    OTP_HEADING: ['OTP (One Time Password)', 'OTP (එක් වරක් මුරපදය)'],
    OTP_MESSAGE: ['We have sent an SMS to your phone','අපි ඔබගේ දුරකථනයට කෙටි පණිවුඩයක් යවා ඇත'],
    INVALID_OTP_MESSAGE: ['Invalid OTP! Please Re-try.', 'වලංගු නොවන OTP! කරුණාකර නැවත උත්සාහ කරන්න.'],
    NO_PLAYERS_MESSAGE: ['Anyone Havent Played  Yet','කවුරුවත් තවම සෙල්ලම් කර නැත']
}



export const leaderboard = [
    {
        name: "hasintha",
        score: "99/2"
    },
    {
        name: "hasintha",
        score: "99/2"
    },
    {
        name: "hasintha",
        score: "99/2"
    },
    {
        name: "hasintha",
        score: "99/2"
    }
]

export const matches = [
    {
        id: 1,
        matchSize: 10,
        winPrize: 500,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-8.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2"
        ]
    },
    {
        id: 2,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 3,
        matchSize: 20,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 4,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 4,
        matchSize: 3,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 4,
        matchSize: 25,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    }
]
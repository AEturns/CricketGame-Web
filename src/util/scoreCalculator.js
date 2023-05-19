export const scoreChange = (run, wicket) => {
    let match = JSON.parse(sessionStorage.getItem("mycricq-matchSession"))
    match.score = match.score + (wicket ? 0 : Number(run))
    match.wickets = match.wickets + (wicket ? 1 : 0)
    match.current = match.current + 1
    sessionStorage.setItem("mycricq-matchSession", JSON.stringify(match))
}

export const answeredQuestionUpdating = (id) => {
    let match = JSON.parse(sessionStorage.getItem("mycricq-matchSession"))
    if(!match.answeredQuestions.includes(id)) {
        match.answeredQuestions.push(id)
        sessionStorage.setItem("mycricq-matchSession", JSON.stringify(match))
    }
   
}

export const completeMatchStatus = () => {
    let match = JSON.parse(sessionStorage.getItem("mycricq-matchSession"))
    match.isCompleted = true
    sessionStorage.setItem("mycricq-matchSession", JSON.stringify(match))
   
}
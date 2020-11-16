const initState = {
    popular : [],
    newGames : [],
    upcoming : []
}

const gameReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state, popular: action.data.popular, upcoming: action.data.upcoming, newGames: action.data.newGames}
        default:
            return {...state}
    }
}

export default gameReducer;
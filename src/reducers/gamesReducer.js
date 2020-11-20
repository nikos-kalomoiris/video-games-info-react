const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: []
}

const gameReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state, popular: action.data.popular, upcoming: action.data.upcoming, newGames: action.data.newGames}
        case "SEARCH_GAMES":
            return {...state, searched: action.data.searched}
        default:
            return {...state}
    }
}

export default gameReducer;
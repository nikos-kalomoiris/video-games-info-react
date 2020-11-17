const initState = {
    details: { platforms: []},
    screenshots: [],
    isLoading: false
}

const detailReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_DETAILS":
            return {...state, details: action.data.game, screenshots: action.data.screenshots, isLoading: false}  
        case "LOADING_DETAILS":
            return {...state, isLoading: true}
        default:
            return {...state}
    }
}

export default detailReducer;
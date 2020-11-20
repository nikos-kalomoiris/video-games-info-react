import axios from 'axios';
import { popularGames, upcomingGames, newGames, gameSearch } from '../api/api';

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGames);
    const upcomingData = await axios.get(upcomingGames);
    const newGamesData = await axios.get(newGames);
    dispatch({
        type: "FETCH_GAMES",
        data: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingData.data.results
        }
    });
};

export const loadSearched = (gameName) => async (dispatch) => {
    const searchedData = await axios.get(gameSearch(gameName));
    dispatch({
        type: "SEARCH_GAMES",
        data: {
            searched: searchedData.data.results,
        }
    });
};

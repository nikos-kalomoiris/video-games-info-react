import axios from 'axios';
import { gameDetails, gameScreenShots } from '../api/api';

export const loadDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });

    const detailsData = await axios.get(gameDetails(id));
    const screenshotsData = await axios.get(gameScreenShots(id));
    dispatch({
        type: "FETCH_DETAILS",
        data: {
            game: detailsData.data,
            screenshots: screenshotsData.data.results
        }
    })
};

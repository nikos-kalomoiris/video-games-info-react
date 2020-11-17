import gamesReducer from './gamesReducer';
import detailReducer from './gameDetailsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    games: gamesReducer,
    game: detailReducer
});

export default rootReducer;
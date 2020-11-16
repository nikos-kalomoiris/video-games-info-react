import gamesReducer from './gamesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    games: gamesReducer
});

export default rootReducer;
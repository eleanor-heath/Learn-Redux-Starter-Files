import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';


// every reducer runs everytime there is an action,
// whether something changes state is up to the user
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
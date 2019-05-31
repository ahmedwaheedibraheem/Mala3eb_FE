import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './User/user-reducer';
import playerReducer from './Player/player-reducer';
import pitchReducer from './Pitch/pitch-reducer';


// Root reducer
const rootReducer = combineReducers({
    userReducer: userReducer,
    playerReducer: playerReducer,
    pitchReducer:pitchReducer
});

// React-redux devTools set-up
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the global store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
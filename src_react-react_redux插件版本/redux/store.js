import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import {commentReducer} from './reducers'

let store = createStore(commentReducer,applyMiddleware(thunk))

export default store;
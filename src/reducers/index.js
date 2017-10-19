import { combineReducers } from 'redux';

import TweetsReducer from './tweets-reducer';

const rootReducer = combineReducers({
  tweets: TweetsReducer,
});

export default rootReducer;

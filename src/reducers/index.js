import { combineReducers } from 'redux';
import sampleReducer from './sample_reducer'

const rootReducer = combineReducers({
  sample: sampleReducer
});

export default rootReducer;

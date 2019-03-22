import {
	ACTION_TYPE,
  UPDATE_TEXT
} from '../constants';

var initialState = {
	field: undefined,
  text:''
}

export default function(state=initialState, action) {
	switch(action.type) {
	  case ACTION_TYPE:
      return {...state, field: action.payload};
    case UPDATE_TEXT:
      return {...state, text: action.payload}
		default:
			return state;
	}
}

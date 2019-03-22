import {
  ACTION_TYPE,
  UPDATE_TEXT
} from '../constants'

export function sampleAction(newValue) {
  return {
    type: ACTION_TYPE,
    payload: newValue
  };
}

export function updateText(newText) {
  return {
    type: UPDATE_TEXT,
    payload: newText
  };
}

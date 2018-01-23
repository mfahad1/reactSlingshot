import { RECEIVE_SCORE } from '../types/';

export function getAllScore(state = 'reactjs', action) {
  switch (action.type) {
    case RECEIVE_SCORE:
      return Object.assign({}, state, {
        scores: action.data
      });
    default:
      return state
  }
}
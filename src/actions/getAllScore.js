import { RECEIVE_SCORE } from '../types';

export function fetchScores() {
  console.log('in action');
  return (dispatch) => {

    return fetch(`http://10.0.0.8:3001/gameScore`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_SCORE,
    data: json,
    receivedAt: Date.now()
  }
}
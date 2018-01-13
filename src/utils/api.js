
import { ApiUrl } from '../constants/app.constants';

const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}


export const initializeToken = (token) => {
  header.authorization = 'JWT ' + token
}

export const getReq = (url = '') => {
  console.log("checking url", ApiUrl + url);
  return new Promise((resolve, reject) => {
    fetch(
      ApiUrl + url,
      {
        method: 'GET',
        headers: header,
      }
    )
      .then((response) => {
        if (response.ok)
          return (resolve(response.json()));
        else return reject(response);
      })
  });
}

export function postReq(url = '', payload) {
  return new Promise((resolve, reject) => {
    return fetch(
      ApiUrl + url,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify(payload)
      }
    )
      .then((response) => {
        if (response.ok)
          return (resolve(response.json()));
        else return reject(response);
      })
  });
}

export function putReq(url = '', payload) {
  console.log(payload);

  return new Promise((resolve, reject) => {
    fetch(
      ApiUrl + url,
      {
        method: 'PUT',
        headers: header,
        body: JSON.stringify(payload)
      }
    )
      .then((response) => {
        if (response.ok)
          return (resolve(response.json()));
        else return reject(response);
      });
  })
}

export function patchReq(url = '', payload) {
  return new Promise((resolve, reject) => {
    fetch(
      ApiUrl + url,
      {
        method: 'PATCH',
        headers: header,
        body: JSON.stringify(payload)
      }
    )
      .then((response) => {
        if (response.ok)
          return (resolve(response.json()));
        else return reject(response);
      });
  })
}

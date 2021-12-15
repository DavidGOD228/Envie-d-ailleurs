import * as React from 'react';
import { API } from '../config/config';

const api = API.url;

const setHeaders = async (contentType = 'application/json') => {
  return {
    'Content-Type': contentType,
  };
};

export const fetcher = (endpoint, method = 'GET', data = {}) => {
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    if (method !== 'GET') options['body'] = JSON.stringify(data);

    return fetch(api + endpoint, options)
      .then((res) => {
        return res.json();
      })
      .then((res) => res);
  } catch (e) {
    console.warn(e);
  }
};

export const get = async (endpoint) => {
  return await fetch(api + endpoint, {
    method: 'GET',
    headers: await setHeaders(),
  })
    .then((res) => res.json())
    .then((res) => res);
};

export const post = async (endpoint, data) => {
  alert('sss');
  return await fetch(api + endpoint, {
    method: 'POST',
    headers: await setHeaders(),
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res);
};

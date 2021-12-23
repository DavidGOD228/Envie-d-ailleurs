import { API } from '../config/config';
import axios from 'axios';
import { METHODS } from './constants';

export const axiosInstance = axios.create({
  baseURL: API.url,
  timeout: 5000,
});

const setHeaders = async (contentType = 'application/json') => {
  return {
    'Content-Type': contentType,
  };
};

export const fetcher = (endpoint, method = 'get', data = {}) => {
  let options = {
    url: endpoint,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    if (method !== METHODS.get) options['data'] = JSON.stringify(data);
    return axiosInstance(options)
      .then((res) => res.data)
      .catch((e) => {
        console.warn(e);
      });
  } catch (e) {
    console.warn(e);
  }
};

export const get = async (endpoint) => {
  return await axiosInstance(endpoint, {
    method: 'GET',
    headers: await setHeaders(),
  }).then((res) => res.data);
};

export const post = async (endpoint, data) => {
  return await axiosInstance(endpoint, {
    method: 'POST',
    headers: await setHeaders(),
    body: JSON.stringify(data),
  }).then((res) => res.data);
};

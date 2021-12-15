import { fetcher } from './apiActions';
import { API_ROUTES, METHODS } from './constants';

export const getPoi = () => fetcher(API_ROUTES.getPoi, METHODS.get);

export const order = (data) =>
  fetcher(API_ROUTES.creteOrder, METHODS.post, data);

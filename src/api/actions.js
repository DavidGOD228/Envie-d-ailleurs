import { fetcher } from './apiActions';
import { API_ROUTES, METHODS } from './constants';

export const getPoi = () => fetcher(API_ROUTES.getPoi, METHODS.get);

export const order = (data) =>
  fetcher(API_ROUTES.creteOrder, METHODS.post, data);

export const checkCommentPassword = (data) =>
  fetcher(API_ROUTES.creteOrder, METHODS.post, data);

export const getCommentForPoi = (data) =>
  fetcher(API_ROUTES.getComment, METHODS.post, data);

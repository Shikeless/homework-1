import { createAction } from 'redux-actions';

export const fetchRequest = createAction('USER/FETCH_REQUEST');
export const fetchSuсcess = createAction('USER/FETCH_SUCCESS');
export const fetchFailure = createAction('USER/FETCH_FAILURE');

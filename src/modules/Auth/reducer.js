import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

const apiKey = handleActions({
    [addApiKey]: (_state, action) => action.payload
}, null)

export default combineReducers({ apiKey })

export const getIsAuthorized = state => state.auth.apiKey != null;
export const getApiKey = state => state.auth.apiKey

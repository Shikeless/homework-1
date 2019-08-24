import {
    fetchRequest,
    fetchSuсcess,
    fetchFailure
} from './actions'

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const isLoading = handleActions({
    [fetchRequest]: () => true,
    [fetchSuсcess]: () => false,
    [fetchFailure]: () => false
}, false)

const data = handleActions({
    [fetchSuсcess]: (_state, action) => action.payload
}, null)

export default combineReducers({
    isLoading,
    data
})

export const getData = state => state.user.data;
export const getIsLoading = state => state.user.isLoading;
import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions/actions'

import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux';

const shows = handleActions({
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload
}, [])

const isLoading = handleActions({
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
}, false)

const error = handleActions({
    [searchRequest]: () => null,
    [searchFailure]: (_state, action) => action.payload
}, null)

export default combineReducers({
    shows,
    isLoading,
    error
})

export const getShows = state => state.searchReducer.shows;
export const getIsLoading = state => state.searchReducer.isLoading;
export const getError = state => state.searchReducer.error;

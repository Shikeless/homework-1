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

export const getShows = state => state.searchReducer.shows
export const getIsLoading = state => state.searchReducer.isLoading
export const getError = state => state.searchReducer.error


// const initialState = {
//     shows: [],
//     isLoading: false,
//     error: null
// }

// export default (state = initialState, action) => {
//     switch(action.type) {
//         case searchRequest.toString():
//             return {
//                 ...state,
//                 shows: [],
//                 isLoading: true
//             };

//         case searchSuccess.toString():
//             return {
//                 ...state,
//                 shows: action.payload,
//                 isLoading: false
//             };
        
//         case searchFailure.toString():
//             return {
//                 ...state,
//                 error: action.payload,
//                 isLoading: false
//             };

//         default:
//             return state
//     }
// }
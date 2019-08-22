import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/actions'

import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const shows = handleActions({
    [showRequest]: () => [],
    [showSuccess]: (_state, action) => {
        return {
            name: action.payload.name,
            image: action.payload.image,
            summary: action.payload.summary,
            cast: action.payload._embedded.cast.map(item => {
                return {
                    id: item.person.id,
                    name: item.person.name,
                    image: item.person.image
                }
            })
        }
    }
}, [])

const isLoading = handleActions({
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
}, false)

export default combineReducers({
    shows,
    isLoading
})

export const getShows = state => state.showReducer.shows
export const getIsLoading = state => state.showReducer.isLoading
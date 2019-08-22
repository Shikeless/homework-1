import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions/actions'

import { search } from '../api'

export const searchMiddleware = store => next => action => {
    if (action.type === searchRequest.toString()) {
        search(action.payload)
            .then(shows => {
            store.dispatch(searchSuccess(shows))
        })
            .catch(error => {
            store.dispatch(searchFailure(error))
        })
    
    console.log(store.getState()) 
    return next(action);
    }
}


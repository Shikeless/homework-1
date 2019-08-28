// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { 
    changeSol,
    fetchPhotosRequest,
    fetchPhotosSuccess,
    fetchPhotosFailure
} from './actions';



const sol = handleActions({
    [changeSol]: (_state, action) => action.payload
}, 1)

const isLoading = handleActions({
    [fetchPhotosRequest]: () => true,
    [fetchPhotosSuccess]: () => false,
    [fetchPhotosFailure]: () => false
}, false)

const photos = handleActions({
    [fetchPhotosRequest]: () => null,
    [fetchPhotosSuccess]: (_state, action) => action.payload
}, [])

export default combineReducers({ sol, isLoading, photos })

export const getSelectedSol = state => state.roverPhotos.sol;
export const getPhotos = state => state.roverPhotos.photos;
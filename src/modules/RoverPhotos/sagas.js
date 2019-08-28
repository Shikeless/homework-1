// Реализуйте саги
import { takeLatest, select, put, call, fork } from 'redux-saga/effects'
import { 
    fetchPhotosRequest,
    fetchPhotosSuccess,
    fetchPhotosFailure
} from './actions'
import { getApiKey } from '../Auth/auth'
import { getSelectedSol } from './RoverPhotos'
import { getPhotos } from './api'

function* fetchPhotosWatcher() {
  yield takeLatest(fetchPhotosRequest, fetchPhotosFlow);
}

export function* fetchPhotosFlow() {
    const rovers = ['opportunity', 'curiosity', 'spirit']
    const photos = {}
  try {
    const apiKey = yield select(getApiKey)
    const selectedSol = yield select(getSelectedSol)
    for (const rover of rovers) {
        const response = yield call( getPhotos, apiKey, rover, selectedSol )
        photos[rover] = response.photos
    }
    console.log(photos)
    

    yield put(fetchPhotosSuccess(photos))
  } catch (error) {
    yield put(fetchPhotosFailure(error))
  }
}

export default function*() {
  yield fork(fetchPhotosWatcher)
}
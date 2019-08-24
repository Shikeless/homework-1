import { takeLatest, select, put, call, fork } from 'redux-saga/effects'
import { fetchRequest, fetchSuсcess, fetchFailure } from './actions'
import { getApiKey } from '../Auth/reducer'
import { getUserInfo } from './api'

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const username = action.payload
  try {
    const apiKey = yield select(getApiKey)
    const response = yield call( getUserInfo, apiKey, username )
    yield put(fetchSuсcess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchUserWatcher)
}

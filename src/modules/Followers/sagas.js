import { takeLatest, select, put, call, fork } from 'redux-saga/effects'
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'
import { getApiKey } from '../Auth/reducer'
import { getFollowersInfo } from './api'

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const username = action.payload
  try {
    const apiKey = yield select(getApiKey)
    const response = yield call( getFollowersInfo, apiKey, username )
    yield put(fetchSuccess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
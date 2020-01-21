import { put, takeLatest, call } from 'redux-saga/effects';
import { updateHeaderData } from './actions';
import { FETCH_HEADER_DATA } from './constants';
import { fetchHeaderDataApi } from './api';

function* fetchHeaderDataSaga() {
  const json = yield call(fetchHeaderDataApi);
  yield put(updateHeaderData(json.data));
}

export default function* rootSaga() {
  yield takeLatest(FETCH_HEADER_DATA, fetchHeaderDataSaga);
}

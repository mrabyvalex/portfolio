import { put, takeLatest, call } from 'redux-saga/effects';
import { updateHeaderData, updateImagesData } from './actions';
import { FETCH_HEADER_DATA, FETCH_IMAGES_DATA } from './constants';
import { fetchHeaderDataApi, fetchImagesDataApi } from './api';

function* fetchHeaderDataSaga() {
  const json = yield call(fetchHeaderDataApi);
  yield put(updateHeaderData(json.data));
}
function* fetchImagesDataSaga() {
  const json = yield call(fetchImagesDataApi);
  yield put(updateImagesData(json.data));
}

export default function* rootSaga() {
  yield takeLatest(FETCH_HEADER_DATA, fetchHeaderDataSaga);
  yield takeLatest(FETCH_IMAGES_DATA, fetchImagesDataSaga);
}

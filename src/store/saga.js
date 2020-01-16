/* eslint-disable no-undef */
import { put, takeLatest } from "redux-saga/effects"
import { dataReceived } from "./actions"
import { TOGGLE_LOADING } from "./constants"

function* toggleLoadingSaga() {
  const json = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then(response => response.json())

  yield put(dataReceived(json.articles || [{ error: json.message }]))
}

export default function* rootSaga() {
  yield takeLatest(TOGGLE_LOADING, toggleLoadingSaga)
}

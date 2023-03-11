import { all } from 'redux-saga/effects'
import { userWatcher } from './saga'
export function* rootSaga() {
  yield all([userWatcher()])
}

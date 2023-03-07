import { call, put, takeEvery} from 'redux-saga/effects'
import { getEstablishment } from './api'
import { TResponse } from './types'
import { fetchEstablishmentError, fetchEstablishmentFulfilled, } from './reducers';
// const {
//   fetchEstablishmentError,
//   fetchEstablishmentFulfilled,
//   fetchEstablishment,
//   requestForEstablishments
// } = allEstablishmentActions

function* fetchEstablishmentWorker() {
  try {
    const response: TResponse[] = yield call(getEstablishment)
    if (response) yield put(fetchEstablishmentFulfilled(response))
  } catch (error) {
    yield put(fetchEstablishmentError())
  }
}

export function* watchEstablishment() {
  yield takeEvery('establishmentState/fetchEstablishment', fetchEstablishmentWorker)
}

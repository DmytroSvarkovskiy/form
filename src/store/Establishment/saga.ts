import { call, put, takeLatest } from 'redux-saga/effects'
import { getEstablishment, deleteEstablishment } from './api'
import { allEstablishmentActions } from './action'
import { TResponse, TDeleteSuccess } from './types'
const {
  changeLoading,
  establishmentError,
  fetchEstablishmentFulfilled,
  getEstablishmentData,
  deleteItemRequest,
  deleteItem,
} = allEstablishmentActions

function* fetchEstablishmentWorker({
  payload: { limit, page },
}: ReturnType<typeof getEstablishmentData>) {
  try {
     yield put(establishmentError(false))
    yield put(changeLoading(true))
    const response: TResponse = yield call(getEstablishment, { limit, page })
    if (response) yield put(fetchEstablishmentFulfilled(response))
  } catch (error) {
    yield put(establishmentError(true))
  } finally {
    yield put(changeLoading(false))
  }
}

function* deleteWorker({ payload }: ReturnType<typeof deleteItemRequest>) {
   yield put(establishmentError(false))
  try {
    yield put(changeLoading(true))
    const response: TDeleteSuccess = yield call(deleteEstablishment, payload)
    if (response) {
      deleteItem(payload)
    }
  } catch (error) {
    yield put(establishmentError(true))
  } finally {
    yield put(changeLoading(false))
  }
}

export function* userWatcher() {
  yield takeLatest(getEstablishmentData, fetchEstablishmentWorker)
  yield takeLatest(deleteItemRequest, deleteWorker)
}

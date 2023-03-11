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
    yield put(changeLoading(true))
    const response: TResponse = yield call(getEstablishment, { limit, page })
    if (response) yield put(fetchEstablishmentFulfilled(response))
  } catch (error) {
    yield put(establishmentError(true))
  } 
}

function* deleteWorker({ payload }: ReturnType<typeof deleteItemRequest>) {
  try {
    yield put(changeLoading(true))
    const response: TDeleteSuccess = yield call(deleteEstablishment, payload)
    if (response) {
      deleteItem(payload)
    }
  } catch (error) {
    yield put(establishmentError(true))
  } 
}

export function* userWatcher() {
  yield takeLatest(getEstablishmentData, fetchEstablishmentWorker)
  yield takeLatest(deleteItemRequest, deleteWorker)
}

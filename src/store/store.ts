import { configureStore } from '@reduxjs/toolkit'
import { establishmentReducer } from './Establishment'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './Establishment/rootSaga'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: { establishmentState: establishmentReducer },
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import { establishmentReducer } from './getEstablishment'
import createSagaMiddleware from '@redux-saga/core'
import { watchEstablishment } from './getEstablishment'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: { establishmentState: establishmentReducer },
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(watchEstablishment)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

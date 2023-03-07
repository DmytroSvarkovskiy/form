import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TResponse } from './types'
type TApiRespose = {
  response: TResponse[]
  limit: string
  page: string
  sortBy: string
  loading: boolean
  error: boolean
}
const initialState: TApiRespose = {
  limit: '10',
  page: '',
  sortBy: '',
  response: [],
  error: false,
  loading: false,
}

export const establishmentSlice = createSlice({
  name: 'establishmentState',
  initialState,
  reducers: {
    fetchEstablishment(state): void {
      state.loading = true
    },
    fetchEstablishmentFulfilled(
      state,
      action: PayloadAction<TResponse[]>,
    ): void {
      state.response = action.payload
      state.loading = false
    },
    fetchEstablishmentError(state): void {
      state.error = true
      state.loading = false
    },
    changeLimit(state, action: PayloadAction<string>) {
      state.limit = action.payload
    },
  },
})
export const {changeLimit,fetchEstablishmentError,fetchEstablishmentFulfilled,fetchEstablishment} = establishmentSlice.actions

export const establishmentReducer = establishmentSlice.reducer

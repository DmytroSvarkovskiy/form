import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TResponse } from './types'
import { TEstablishmentData } from './types'
type TApiRespose = {
  response: TEstablishmentData[]
  limit: string
  page: number
  sortBy: string
  loading: boolean
  error: boolean
  totalCount: number
}
const initialState: TApiRespose = {
  limit: '10',
  page: 1,
  sortBy: '',
  response: [],
  error: false,
  loading: false,
  totalCount: 0,
}

export const establishmentSlice = createSlice({
  name: 'establishmentState',
  initialState,
  reducers: {
    changeLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    fetchEstablishmentFulfilled(state, action: PayloadAction<TResponse>): void {
      state.response = action.payload.models
      state.totalCount = action.payload.totalCount
      state.error = false;
      state.loading=false
    },
    establishmentError(state,{payload}: PayloadAction<boolean>): void {
      state.error = payload
       state.loading=false
    },
    changeLimit(state, action: PayloadAction<string>) {
      state.limit = action.payload
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    deleteItem(state, action: PayloadAction<string>) {
      const indxItem = state.response.findIndex(
        item => item.id === action.payload,
      )
      state.response.splice(indxItem, 1)
    },
  },
})
export const establishmentActions = establishmentSlice.actions

export const establishmentReducer = establishmentSlice.reducer

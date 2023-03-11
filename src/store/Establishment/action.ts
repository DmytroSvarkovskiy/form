import { createAction } from '@reduxjs/toolkit'
import { establishmentActions } from './reducers'
export const allEstablishmentActions = {
  ...establishmentActions,
  getEstablishmentData: createAction<{ limit: string; page: number }>(
    'establishmentState/fetch',
  ),
  deleteItemRequest: createAction<string>('establishmentState/deleteItem'),
}

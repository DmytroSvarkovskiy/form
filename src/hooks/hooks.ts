import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { useState } from 'react'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(isOpen => !isOpen)
  return { isOpen, open, close, toggle }
}

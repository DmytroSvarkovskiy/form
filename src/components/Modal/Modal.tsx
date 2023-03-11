import { createPortal } from 'react-dom'
import { ReactNode, useEffect } from 'react'
import { Overlay, ModalWindow } from './Modal.styled'
const modalRoot = document.querySelector('#modal') as HTMLDivElement
type TModal = {
  children: ReactNode
  closeModal: () => void
}
export const Modal: React.FC<TModal> = ({ children, closeModal }) => {
  useEffect(() => {
    const handleUserKeyPress = (event: KeyboardEvent) => {
      const { key } = event
      if (key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleUserKeyPress)

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [closeModal])

  const onClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return createPortal(
    <Overlay onClick={onClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot,
  )
}

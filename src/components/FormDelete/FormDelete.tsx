import {
  DeleteWrap,
  DeleteBtnWrap,
  DeleteTitle,
  DeleteAfterTitle,
  TitleWrap,
} from './FormDelete.styled'
import { allEstablishmentActions } from '../../store/Establishment'
import { useAppDispatch } from '../../hooks'
import { RxCross2 } from 'react-icons/rx'
import { RiDeleteBinLine } from 'react-icons/ri'

type TProps = {
  id: string
  close: () => void
}
export const FormDelete: React.FC<TProps> = ({ id, close }) => {
  const dispatch = useAppDispatch()
  const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(allEstablishmentActions.deleteItemRequest(id))
  }
  return (
    <DeleteWrap>
      <TitleWrap>
        <DeleteTitle>Deleting the establishment</DeleteTitle>
        <button onClick={close}>
          <RxCross2 />
        </button>{' '}
      </TitleWrap>
      <DeleteAfterTitle>
        Are you sure you want to delete this establishment?{' '}
      </DeleteAfterTitle>
      <DeleteBtnWrap>
        <button onClick={onDeleteClick}>
          <RiDeleteBinLine />
          <p>Delete</p>
        </button>
        <button onClick={close}>Cancel</button>
      </DeleteBtnWrap>
    </DeleteWrap>
  )
}

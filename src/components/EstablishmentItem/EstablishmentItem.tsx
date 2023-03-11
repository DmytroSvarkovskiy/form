import { BiPencil } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { format } from 'date-fns'
import { Modal } from '../Modal/Modal'
import { useToggle } from '../../hooks'
import { FormDelete } from '../FormDelete/FormDelete'

import {
  EstablishmentList,
  EstablishmentPoint,
  EditBtn,
  DeleteBtn,
  EstablishmentLi,
} from './Establishmentitem.styled'

type TProps = {
  title: string
  id: string
  category: {
    title: { name: string; lang: string }[]
    image: string
    id: string
  }
  address: string
  status: string
  createdAt: string
  index: number
}

export const EstablishmentItem: React.FC<TProps> = ({
  category,
  address,
  status,
  createdAt,
  index,
  title,
  id,
}) => {
  const { isOpen, open, close } = useToggle(false)
  isOpen
    ? document.body.classList.add('modal-open')
    : document.body.classList.remove('modal-open')

  const handleDeleteClick = () => {
    close()
  }
  const firstPartImg = 'https://dev-api.radius.kitg.com.ua/public/image/'
  return (
    <EstablishmentLi id={id}>
      <EstablishmentList>
        <EstablishmentPoint>
          <input type="checkbox" />
        </EstablishmentPoint>
        <EstablishmentPoint>{index}</EstablishmentPoint>
        <EstablishmentPoint>
          <img src={firstPartImg + category.image} alt={title} />
          <p>{title}</p>
        </EstablishmentPoint>
        <EstablishmentPoint>{category.title[0].name}</EstablishmentPoint>
        <EstablishmentPoint>
          {format(new Date(createdAt), 'MMM d, YYY')} at{' '}
          {format(new Date(createdAt), 'p')}
        </EstablishmentPoint>
        <EstablishmentPoint>{address.slice(0, 73)}</EstablishmentPoint>
        <EstablishmentPoint>
          <div id={status.toLowerCase()}></div>
          {status}
        </EstablishmentPoint>
        <EstablishmentPoint>
          <EditBtn>
            <BiPencil />
          </EditBtn>
        </EstablishmentPoint>
        <EstablishmentPoint>
          <DeleteBtn onClick={open}>
            <RiDeleteBinLine />
          </DeleteBtn>{' '}
          {isOpen && (
            <Modal closeModal={handleDeleteClick}>
              <FormDelete id={id} close={close} />
            </Modal>
          )}
        </EstablishmentPoint>
      </EstablishmentList>
    </EstablishmentLi>
  )
}

import { BiPencil } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { format } from 'date-fns'

import {
  EstablishmentList,
  EstablishmentPoint,
  EditBtn,
  DeleteBtn,
  EstablishmentLi,
} from './Establishmentitem.styled'

type TProps = {
  title: string
  category: {
    title: string
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
}) => {
  return (
    <EstablishmentLi>
      <EstablishmentList>
        <EstablishmentPoint>
          <input type="checkbox" />
        </EstablishmentPoint>
        <EstablishmentPoint>{index}</EstablishmentPoint>
        <EstablishmentPoint>
          <img src={category.image} alt={title} />
          <p>{title}</p>
        </EstablishmentPoint>
        <EstablishmentPoint>{category.title}</EstablishmentPoint>
        <EstablishmentPoint>
          {format(new Date(createdAt), 'MMM d, YYY')} at{' '}
          {format(new Date(createdAt), 'p')}
        </EstablishmentPoint>
        <EstablishmentPoint>{address}</EstablishmentPoint>
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
          <DeleteBtn>
            <RiDeleteBinLine />
          </DeleteBtn>
        </EstablishmentPoint>
      </EstablishmentList>
    </EstablishmentLi>
  )
}

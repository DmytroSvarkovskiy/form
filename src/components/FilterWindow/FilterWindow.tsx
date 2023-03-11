import { RxCross2 } from 'react-icons/rx'
import { FilterWrap } from './FilterWindow.styled'
type TProps = {
  close: () => void
}
export const FilterWindow: React.FC<TProps> = ({ close }) => {
  //   const [filter, setFilter] = useState('categories')
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <FilterWrap>
      <div>
        <p>Сhoose what the filter will be based on</p>
        <button onClick={close}>
          <RxCross2 />
        </button>
      </div>
      <div>
        <label htmlFor="filter">categories </label>
        <input
          onChange={onHandleChange}
          id="filter"
          name="filter"
          type="radio"
          value="categories"
        />
        <label htmlFor="specifications"> specifications</label>
        <input
          onChange={onHandleChange}
          id="specifications"
          name="filter"
          type="radio"
          value="specifications"
        />
      </div>
      <div>
        <button onClick={close}>Cancel</button>

        <button>Apply</button>
      </div>
    </FilterWrap>
  )
}

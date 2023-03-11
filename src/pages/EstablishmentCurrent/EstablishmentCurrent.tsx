import { PageWrapper } from '../../components'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine, RiDownloadFill } from 'react-icons/ri'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks'
import { EstablishmentItem } from '../../components'
import { allEstablishmentActions } from '../../store/Establishment'
import { useAppSelector } from '../../hooks'
import { Pagination } from '../../components'
import { useToggle } from '../../hooks'
import { Modal } from '../../components'
import { FilterWindow } from '../../components'
import { IoIosArrowDown } from 'react-icons/io'
import {
  HeadingWrap,
  LinkCurrentPage,
  InputCurrentWrapper,
  UnderInputCurrentWrapper,
  ElInputWrap,
  DownloadWrap,
  SettingsFilterList,
  SettingsItem,
  SelectLimitPage,
  BottomContainer,
  EstablishmentBottomItem,
} from './EstablishmentCurrent.styled'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const EstablishmentCurrent: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isOpen, close, open } = useToggle(false)
  const [filter, setFilter] = useState<
    ' Establishment' | 'Category' | 'Date' | null
  >(null)
  const establishmentList = useAppSelector(
    state => state.establishmentState.response,
  )

  const countItemOnWindow = useAppSelector(
    state => state.establishmentState.limit,
  )

  const currentPage = useAppSelector(state => state.establishmentState.page)

  const totalItemCount = useAppSelector(
    state => state.establishmentState.totalCount,
  )
  const totalpage = Math.ceil(totalItemCount / +countItemOnWindow)

  useEffect(() => {
    if (currentPage > totalpage) {
      dispatch(allEstablishmentActions.changePage(1))
    }
    dispatch(
      allEstablishmentActions.getEstablishmentData({
        limit: countItemOnWindow,
        page: currentPage,
      }),
    )
  }, [countItemOnWindow, currentPage, dispatch, totalpage])

  const handleLimitPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(allEstablishmentActions.changeLimit(e.target.value))
  }

  const onPageClick = ({ selected }: { selected: number }) => {
    dispatch(allEstablishmentActions.changePage(+selected + 1))
  }

  return (
    <>
      <div>
        {isOpen && (
          <Modal closeModal={close}>
            <FilterWindow close={close} />
          </Modal>
        )}
        <HeadingWrap>
          Establishment
          <LinkCurrentPage to="/new-establishment">
            <AiOutlinePlus />
            New
          </LinkCurrentPage>
        </HeadingWrap>
        <PageWrapper>
          <InputCurrentWrapper>
            <UnderInputCurrentWrapper>
              <ElInputWrap>
                <FiSearch />
                <label>
                  <input placeholder="Search establishment" />
                </label>
              </ElInputWrap>
              <ElInputWrap>
                <label>
                  <input type="date" placeholder="Select date" />
                </label>
              </ElInputWrap>
              <ElInputWrap onClick={open}>
                <RiEqualizerLine /> Filter
              </ElInputWrap>
            </UnderInputCurrentWrapper>
            <DownloadWrap>
              <RiDownloadFill />
            </DownloadWrap>
          </InputCurrentWrapper>
          <div>
            <SettingsFilterList>
              <SettingsItem>
                <label>
                  <input type="checkbox" />
                </label>
              </SettingsItem>
              <SettingsItem>№</SettingsItem>
              <SettingsItem
                onClick={() => setFilter(' Establishment')}
                id={filter === ' Establishment' ? 'active' : 'inactive'}>
                Establishment <IoIosArrowDown />
              </SettingsItem>
              <SettingsItem
                onClick={() => setFilter('Category')}
                id={filter === 'Category' ? 'active' : 'inactive'}>
                Category <IoIosArrowDown />
              </SettingsItem>
              <SettingsItem
                onClick={() => setFilter('Date')}
                id={filter === 'Date' ? 'active' : 'inactive'}>
                Date
                <IoIosArrowDown />
              </SettingsItem>
              <SettingsItem>Location</SettingsItem>
              <SettingsItem>Status</SettingsItem>
            </SettingsFilterList>
            <Outlet />
            <ul>
              {establishmentList.map(
                ({
                  id,
                  category,
                  createdAt,
                  address,
                  status,
                  index,
                  title,
                }) => {
                  return (
                    <EstablishmentItem
                      key={id}
                      id={id}
                      category={category}
                      createdAt={createdAt}
                      address={address[0].value}
                      status={status}
                      index={index}
                      title={title[0].value}
                    />
                  )
                },
              )}
            </ul>
          </div>
          <BottomContainer>
            <EstablishmentBottomItem>
              Showing{' '}
              {currentPage === 1
                ? 1
                : currentPage === totalpage
                ? (currentPage - 1) * +countItemOnWindow + 1
                : currentPage * +countItemOnWindow + 1 - +countItemOnWindow}
              -
              {currentPage === 1
                ? establishmentList.length
                : +currentPage === +totalpage
                ? totalItemCount
                : +countItemOnWindow * +currentPage}{' '}
              of {totalItemCount} items
            </EstablishmentBottomItem>
            <EstablishmentBottomItem>
              <Pagination onPageChange={onPageClick} pageCount={totalpage} />
            </EstablishmentBottomItem>
            <EstablishmentBottomItem>
              Show
              <SelectLimitPage
                value={countItemOnWindow}
                onChange={handleLimitPage}>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </SelectLimitPage>
              items
            </EstablishmentBottomItem>
          </BottomContainer>
        </PageWrapper>
      </div>
    </>
  )
}
export default EstablishmentCurrent

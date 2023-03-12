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
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
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
    if (currentPage > totalpage && totalpage !== 0) {
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
    selected + 1 !== currentPage &&
      dispatch(allEstablishmentActions.changePage(+selected + 1))
  }
  const onChangeData = (date: Dayjs | null) => {
    if (date) {
      console.log('Date: ', date)
    }
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
                <label>
                  <input name="search" placeholder="Search establishment" />
                  <FiSearch />
                </label>
              </ElInputWrap>
              <ElInputWrap>
                <DatePicker
                  presets={[
                    { label: 'Yesterday', value: dayjs().add(-1, 'd') },
                    { label: 'Last week', value: dayjs().add(-7, 'd') },
                    {
                      label: 'Last month',
                      value: dayjs().add(-1, 'month'),
                    },
                    { label: 'All time ', value: dayjs() },
                  ]}
                  onChange={onChangeData}
                />
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
          {totalpage !== 0 && (
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
                {totalpage > 1 && (
                  <Pagination
                    onPageChange={onPageClick}
                    pageCount={totalpage}
                  />
                )}
              </EstablishmentBottomItem>
              {totalItemCount > 5 && (
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
              )}
            </BottomContainer>
          )}
        </PageWrapper>
      </div>
    </>
  )
}
export default EstablishmentCurrent

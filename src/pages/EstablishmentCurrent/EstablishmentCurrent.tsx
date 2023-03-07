import { PageWrapper } from '../../components'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine, RiDownloadFill } from 'react-icons/ri'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks'
import { fetchEstablishment } from '../../store/getEstablishment'
import { EstablishmentItem } from '../../components/EstablishmentItem/EstablishmentItem'
import { useAppSelector } from '../../hooks'
import { changeLimit } from '../../store/getEstablishment'
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

const EstablishmentCurrent: React.FC = () => {
  const establishmentList = useAppSelector(
    state => state.establishmentState.response,
  )

  const limitPage = useAppSelector(state => state.establishmentState.limit)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchEstablishment())
  }, [dispatch])

  const handleLimitPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLimit(e.target.value))
  }
  return (
    <div>
      <HeadingWrap>
        Establishment
        <LinkCurrentPage to="/">
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
                <input placeholder="Search" />
              </label>
            </ElInputWrap>
            <ElInputWrap>
              <label>
                <input type="date" placeholder="Select date" />
              </label>
            </ElInputWrap>
            <ElInputWrap>
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
            <SettingsItem>Establishment</SettingsItem>
            <SettingsItem>Category</SettingsItem>
            <SettingsItem>Date</SettingsItem>
            <SettingsItem>Location</SettingsItem>
            <SettingsItem>Status</SettingsItem>
          </SettingsFilterList>
          <ul>
            {establishmentList.map(
              ({ id, category, createdAt, address, status, index, title }) => {
                return (
                  <EstablishmentItem
                    key={id}
                    category={category}
                    createdAt={createdAt}
                    address={address}
                    status={status}
                    index={index}
                    title={title}
                  />
                )
              },
            )}
          </ul>
        </div>
        <BottomContainer>
          <EstablishmentBottomItem>
            Showing 1-
            {establishmentList.length < +limitPage
              ? establishmentList.length
              : limitPage}{' '}
            of {establishmentList.length} items
          </EstablishmentBottomItem>
          <EstablishmentBottomItem>Pagination</EstablishmentBottomItem>
          <EstablishmentBottomItem>
            Swow
            <SelectLimitPage value={limitPage} onChange={handleLimitPage}>
              <option value="2">2</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </SelectLimitPage>
            items
          </EstablishmentBottomItem>
        </BottomContainer>
      </PageWrapper>
    </div>
  )
}
export default EstablishmentCurrent

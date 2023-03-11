import { Modal } from '../../components'
import { useToggle } from '../../hooks'
import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine, RiDownloadFill } from 'react-icons/ri'
import { HeadingWrap } from './EstablishedPending.styled'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import {
  InputCurrentWrapper,
  UnderInputCurrentWrapper,
  ElInputWrap,
  DownloadWrap,
  SettingsFilterList,
  SettingsItem,
} from '../EstablishmentCurrent'
import { FilterWindow } from '../../components'
import { PageWrapper } from '../../components'
const CategoriesInModeration: React.FC = () => {
  const [filter, setFilter] = useState<
    ' Establishment' | 'Category' | 'Date' | null
  >(null)
  const { close, isOpen, open } = useToggle(false)
  return (
    <div>
      {' '}
      {isOpen && (
        <Modal closeModal={close}>
          <FilterWindow close={close} />
        </Modal>
      )}
      <HeadingWrap>Pending</HeadingWrap>
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
        </InputCurrentWrapper>{' '}
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
          <SettingsItem>Manager</SettingsItem>
          <SettingsItem>Status</SettingsItem>
        </SettingsFilterList>
      </PageWrapper>
    </div>
  )
}
export default CategoriesInModeration

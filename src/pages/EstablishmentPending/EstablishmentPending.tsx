import { Modal } from '../../components'
import { useToggle } from '../../hooks'
import { FiSearch } from 'react-icons/fi'
import { RiEqualizerLine, RiDownloadFill } from 'react-icons/ri'
import { HeadingWrap } from '../EstablishmentCurrent'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
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
  const onChangeData = (date: Dayjs | null) => {
    if (date) {
      console.log('Date: ', date)
    }
  }
  return (
    <div>
      {isOpen && (
        <Modal closeModal={close}>
          <FilterWindow close={close} />
        </Modal>
      )}
      <HeadingWrap>
        <p>Pending</p>
      </HeadingWrap>
      <PageWrapper>
        <InputCurrentWrapper>
          <UnderInputCurrentWrapper>
            <ElInputWrap>
              <label htmlFor="search">
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
        <ul></ul>
        <div></div>
      </PageWrapper>
    </div>
  )
}
export default CategoriesInModeration

import {
  HeaderStyled,
  LogoWrapper,
  HeaderWrap,
  HeaderSearchWrap,
  HeaderSearchInput,
  NotificationWrap,
} from './Header.styled'
import { FiSearch } from 'react-icons/fi'
import { RiNotification2Line } from 'react-icons/ri'
export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <LogoWrapper>LOGO</LogoWrapper>
      <HeaderWrap>
        <HeaderSearchWrap>
          <FiSearch />
          <label>
            <HeaderSearchInput placeholder="Search" />
          </label>
        </HeaderSearchWrap>
        <NotificationWrap>
          <RiNotification2Line name="notifications-line" />
        </NotificationWrap>
      </HeaderWrap>
    </HeaderStyled>
  )
}

import { AppLink } from './AppBar.styled'
import { FiUsers } from 'react-icons/fi'
import { TbLayoutDashboard } from 'react-icons/tb'
import { RiBankLine } from 'react-icons/ri'
import { MdEqualizer } from 'react-icons/md'
import { RiUserSettingsLine, RiLogoutBoxLine } from 'react-icons/ri'
import {
  Nav,
  AppBarWrapper,
  EstablishmentWrap,
  LinkList,
  LinkItem,
  DropLinkList,
  DropTitle,
  LogOutWrap,
  LogOutLink,
} from './AppBar.styled'
import { useState } from 'react'
export const AppBar: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const onDropClick = () => {
    setVisible(true)
  }
  const closeDrop = () => {
    setVisible(false)
  }
  return (
    <AppBarWrapper>
      <Nav>
        <LinkList>
          <LinkItem>
            <AppLink onClick={closeDrop} to="/">
              {' '}
              <TbLayoutDashboard />
              Dashboard
            </AppLink>
          </LinkItem>
          <LinkItem>
            <EstablishmentWrap>
              <DropTitle
                id={visible ? 'visible' : 'hidden'}
                onClick={onDropClick}>
                <RiBankLine />
                Establishments
              </DropTitle>
              <DropLinkList id={visible ? 'visible' : 'hidden'}>
                <li>
                  <AppLink to="/establishments">Current establishments</AppLink>
                </li>
                <li>
                  <AppLink to="/in-moderation">In moderation</AppLink>
                </li>
              </DropLinkList>
            </EstablishmentWrap>
          </LinkItem>
          <LinkItem>
            {' '}
            <AppLink onClick={closeDrop} to="/categories">
              <MdEqualizer />
              Categories
            </AppLink>
          </LinkItem>
          <LinkItem>
            {' '}
            <AppLink onClick={closeDrop} to="/customers">
              <FiUsers />
              Customers
            </AppLink>
          </LinkItem>
          <LinkItem>
            {' '}
            <AppLink onClick={closeDrop} to="/roles">
              <RiUserSettingsLine />
              Roles
            </AppLink>
          </LinkItem>
        </LinkList>
        <LogOutWrap>
          <LogOutLink to="/">
            <RiLogoutBoxLine />
            Log Out
          </LogOutLink>
        </LogOutWrap>
      </Nav>
    </AppBarWrapper>
  )
}

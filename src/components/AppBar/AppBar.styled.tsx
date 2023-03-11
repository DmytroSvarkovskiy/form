import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  font-size: 14px;
  line-height: 1.43;
  color: #333333;
`
export const AppBarWrapper = styled.div`
  display: flex;
  position: relative;

  width: 237px;
  height: 1024px;
  margin-right: 20px;
  padding: 32px 23px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(129, 129, 129, 0.15);
`
export const AppLink = styled(NavLink)`
  align-items: center;
  display: flex;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
  &.active,
  &.activePage {
    color: #2bb54b;
    ::before {
      content: '';
      position: absolute;
      /* transform: translate(0, -10%); */
      left: 0;
      width: 2px;
      background-color: #2bb54b;
      height: 40px;
      display: block;
    }
  }
`
export const EstablishmentWrap = styled.div`
  display: flex;
  flex-direction: column;
`
export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const LinkItem = styled.li`
  display: flex;
  &:nth-child(3) {
    svg {
      rotate: 90deg;
    }
  }
`
export const DropLinkList = styled.ul`
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &#hidden {
    display: none;
  }
  &#visible {
    display: blok;
  }
`
export const DropTitle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 8px;

  &#visible {
    margin-bottom: 20px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`
export const LogOutWrap = styled.div`
  position: absolute;
  color: #dd1919;
  top: 970px;
`
export const LogOutLink = styled(Link)`
  align-items: center;
  display: flex;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
`

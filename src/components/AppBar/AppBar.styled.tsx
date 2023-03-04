import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 14px;
  line-height: 1.43;
  color: #333333;
`
export const AppBarWrapper = styled.div`
  display: flex;
  width: 237px;
  height: 1024px;
  padding: 32px 23px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(129, 129, 129, 0.15);
`
export const AppLink = styled(NavLink)`
  &.active {
    color: #2bb54b;
  }
`

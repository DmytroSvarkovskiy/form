import styled from 'styled-components'
export const HeaderStyled = styled.header`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(129, 129, 129, 0.1);
  height: 64px;
  width: 1440px;
  display: flex;
`
export const LogoWrapper = styled.div`
  min-width: 237px;
  height: 64px;
  box-shadow: 0px 2px 4px rgba(129, 129, 129, 0.1);
  border-bottom: 1px solid #ededed;
  padding: 14px 19px;
`
export const HeaderSearchWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  svg {
    width: 24px;
    height: 24px;
    color: #9e9e9e;
  }
`
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
`
export const HeaderSearchInput = styled.input`
  width: 283px;
  height: 20px;
  border: none;
  outline: none;
  margin-left: 9.41px;
  ::placeholder {
    font-size: 14px;
    line-height: 1.43;
  }
`
export const NotificationWrap = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`

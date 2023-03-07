import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const HeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 20px;
`
export const LinkCurrentPage = styled(Link)`
  background-color: #2bb54b;
  color: #ffffff;
  width: 111px;
  height: 44px;
  border-radius: 8px;
  line-height: 1.43;
  font-size: 14px;

  svg {
    width: 20px;
    height: 20px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
export const InputCurrentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`
export const UnderInputCurrentWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 0 20px;
`
export const ElInputWrap = styled.div`
  display: flex;
  align-items: center;
  :nth-child(1) {
    padding: 12px;
    gap: 9.4px;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    width: 315px;
    height: 44px;
    svg {
      width: 20px;
      height: 20px;
      color: #9e9e9e;
    }
    input {
      border: none;
      background-color: transparent;
      width: 260px;
      outline: none;
      ::placeholder {
        color: #9e9e9e;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
      }
    }
  }
  :nth-child(2) {
    justify-content: center;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    gap: 9.4px;
    width: 194px;
    height: 44px;
  }
  :nth-child(3) {
    justify-content: center;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    gap: 9.4px;
    width: 150px;
    height: 44px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`
export const DownloadWrap = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  svg {
    color: #2bb54b;
    width: 20px;
    height: 20px;
  }
`
export const SettingsFilterList = styled.ul`
  display: flex;
  height: 60px;
  border-bottom: 1px solid #ededed;
  padding: 0 20px;
`
export const SettingsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  :nth-child(1) {
    width: 40px;
    padding: 0 10px 0 0;
  }
  :nth-child(2) {
    width: 87px;
  }
  :nth-child(3) {
    width: 224px;
  }
  :nth-child(4) {
    width: 144px;
  }
  :nth-child(5) {
    width: 135px;
  }
  :nth-child(6) {
    width: 206px;
  }
  :nth-child(7) {
    width: 171px;
  }
`
export const SelectLimitPage = styled.select`
  width: 72px;
  height: 36px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;

  padding: 0 8px;
`
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 0;
  color: #9e9e9e;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
`
export const EstablishmentBottomItem = styled.div`
  &:nth-child(1) {
    color: #9e9e9e;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
  }
  &:nth-child(3) {
    color: #333333;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

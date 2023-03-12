import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const HeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  color: #333333;
  margin: 28px 0 26px;
  p {
    display: flex;
    height: 44px;
    align-items: center;
  }
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
  padding: 0 0 12px;
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
  height: 44px;
  border-radius: 8px;
  transition: border-color 250ms;
  position: relative;

  :nth-child(1) {
    gap: 9.4px;

    svg {
      transition: color 300ms;
      width: 20px;
      height: 20px;
      color: #9e9e9e;
      position: absolute;
      left: 12px;
      top: 12px;
    }
    label {
      position: relative;
    }
    input {
      transition: border-color 300ms;
      border-radius: 8px;
      border: 1px solid #e1e1e1;
      padding: 12px 12px 12px 41px;
      outline: none;
      height: 44px;
      border: 1px solid #e1e1e1;
      width: 315px;
      ::placeholder {
        color: #9e9e9e;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
      }
      &:hover,
      &:focus {
        border: 1px solid #2bb54b;
        + svg {
          color: #2bb54b;
        }
      }
    }
  }
  :nth-child(2) {
    border: none;
    div {
      border-radius: 8px;
      width: 194px;
      height: 44px;

      &:hover {
        border-color: #2bb54b;
        svg {
          color: #2bb54b;
          transition: color 250ms;
        }
      }
      &.ant-picker-focused {
        border-color: #2bb54b;
        svg {
          color: #2bb54b;
        }
      }
      div {
        span {
          span {
            svg {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }

  :nth-child(3) {
    border: 1px solid #e1e1e1;

    justify-content: center;
    gap: 9.4px;
    width: 150px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    transition: color 250ms, border-color 250ms;
    cursor: pointer;
    &:hover {
      border-color: #2bb54b;
      color: #2bb54b;
    }
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
  &#active {
    svg {
      rotate: 0deg;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    rotate: 180deg;
    transition: rotate 300ms;
  }
  :nth-child(1) {
    width: 40px;
    padding: 0 10px 0 0;
  }
  :nth-child(2) {
    width: 87px;
  }
  :nth-child(3) {
    cursor: pointer;
    width: 224px;
  }
  :nth-child(4) {
    cursor: pointer;

    width: 144px;
  }
  :nth-child(5) {
    cursor: pointer;

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

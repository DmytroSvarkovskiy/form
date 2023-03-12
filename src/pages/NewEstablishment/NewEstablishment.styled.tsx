import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input } from 'antd'

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  svg {
    color: #2bb54b;
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`
export const NewEstablishmentWrap = styled.div`
  position: relative;
  div {
    &:nth-child(2) {
      padding: 0;
    }
  }
`
export const SubmitBtn = styled.button`
  position: absolute;
  top: 24px;
  cursor: pointer;
  right: 0;
  width: 106px;
  height: 44px;
  background: #2bb54b;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  &[disabled] {
    background: #ededed;
    color: #9e9e9e;
  }
`
export const FormAdd = styled.form`
  display: flex;
  div {
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.43;
      margin-bottom: 8px;
    }
    &:nth-child(2) {
      padding: 20px;
      width: 752px;
      border-right: 1px solid #ededed;
    }
    &:nth-child(3) {
      padding: 20px;
    }

    p {
      font-size: 20px;
      line-height: 1.4;
      font-weight: 600;
    }
  }
`
export const InputCustom = styled(Input)`
  &:focus,
  &:hover {
    border-color: #2bb54b;
  }
`

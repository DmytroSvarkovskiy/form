import styled from 'styled-components'
export const FilterWrap = styled.div`
  @import '~pretty-checkbox/';
  background-color: #ffffff;
  filter: drop-shadow(0px 5px 10px rgba(129, 129, 129, 0.16));
  border-radius: 16px;
  width: 500px;
  height: 204px;
  padding: 16px 10px 8px;
  color: #333333;
  div {
    margin-bottom: 40px;
    display: flex;

    &:nth-child(1) {
      justify-content: space-between;
      svg {
        width: 20px;
        height: 20px;
        color: #9e9e9e;
      }
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      p {
        font-weight: 600;
        font-size: 20px;
        line-height: 1.4;
      }
    }
    &:nth-child(2) {
      gap: 20px;
      display: flex;
      justify-content: center;
      font-size: 20px;
      line-height: 1.4;
    }
    &:nth-child(3) {
      justify-content: end;
      gap: 30px;
      button {
        border-radius: 8px;
        padding: 8px 15px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:first-child {
          color: #2bb54b;
          border: 1px solid;
        }
        &:last-child {
          background-color: #2bb54b;
          color: #ffffff;
        }
      }
    }
  }
`

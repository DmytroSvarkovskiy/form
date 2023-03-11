import styled from 'styled-components'
export const DeleteWrap = styled.div`
  background-color: #ffffff;
  width: 300px;
  filter: drop-shadow(0px 5px 10px rgba(129, 129, 129, 0.16));
  border-radius: 16px;
  width: 500px;
  height: 204px;
  padding: 16px 10px 8px;
  color: #333333;
`
export const DeleteBtnWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  button {
    cursor: pointer;
    height: 44px;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 300ms;

    &:nth-child(1) {
      :hover {
        color: #ffc2c2;
        svg {
          color: #ffc2c2;
        }
        border: 1px solid #ffc2c2;
      }
      transition: all 0.3s;

      border: 1px solid #dd1919;
      color: #dd1919;
      background-color: transparent;
      svg {
        transition: color 300ms;

        color: #dd1919;
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
      p {
        padding-top: 2px;
      }
      width: 132px;
    }
    &:nth-child(2) {
      background-color: #2bb54b;
      color: #ffffff;
      border: 1px solid #2bb54b;
      display: flex;
      align-items: center;
      width: 104px;
      padding-top: 2px;
      :hover {
        background-color: #7fd394;
      }
    }
  }
`
export const DeleteTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 18px;
`
export const DeleteAfterTitle = styled.p`
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 70px;
`
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
      color: #cacaca;
    }
  }
`

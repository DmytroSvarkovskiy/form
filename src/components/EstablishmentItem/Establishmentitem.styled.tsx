import styled from 'styled-components'
export const EstablishmentList = styled.ul`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`
export const EstablishmentLi = styled.li`
  border-bottom: 1px solid #ededed;
  padding: 0 20px;
`
export const EstablishmentPoint = styled.li`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 68px;

  :nth-child(1) {
    width: 42px;
    padding: 0 10px 0 0;
  }
  :nth-child(2) {
    width: 87px;
  }
  :nth-child(3) {
    width: 224px;
    gap: 8px;
    img {
      width: 44px;
      height: 44px;
      border-radius: 8px;
    }
    p {
      display: flex;
      align-items: center;
      width: 132px;
      height: 40px;
      overflow: auto;
    }
  }
  :nth-child(4) {
    width: 144px;
  }
  :nth-child(5) {
    display: flex;
    width: 135px;
    flex-wrap: wrap;
    padding-right: 25px;
  }
  :nth-child(6) {
    width: 206px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 4px;
    overflow: auto;
  }
  :nth-child(7) {
    width: 171px;
    div {
      margin-right: 8px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      &#pending {
        background-color: #f59e0b;
      }
      &#published {
        background-color: #19dda2;
      }
      &#rejected {
        background-color: #dd1919;
      }
    }
  }
  :nth-child(8) {
    padding: 12px;
    width: 68px;
  }
  :nth-child(9) {
    padding-right: 0;
    width: 30px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`
export const EditBtn = styled.button`
  width: 44px;
  height: 44px;
  background-color: #2bb54b;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  svg {
    color: #ffffff;
    width: 20px;
    height: 20px;
  }
`
export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: #dd1919;
    width: 20px;
    height: 20px;
  }
`

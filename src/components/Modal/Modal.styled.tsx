import styled from 'styled-components'
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(85, 85, 85, 0.3);
  z-index: 120;
`
export const ModalWindow = styled.div`
  position: absolute;
  max-height: calc(100vh - 24px);
`

// components/ModalStyled.js
import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.5
  ); /* Semi-transparent black background for the blur effect */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background: white; /* Background color of the modal */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Box shadow for a subtle lift effect */
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalButton = styled.span`
  cursor: pointer;
`

export const ModalBody = styled.div`
  /* Add any additional styling for the modal body */
`

// components/Modal.js
import React from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalButton,
  ModalBody,
} from './ModalStyled'

const Modal = ({ isOpen, onClose, onSave, children }) => {
  return (
    isOpen && (
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <ModalButton onClick={onClose}>Close</ModalButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </ModalOverlay>
    )
  )
}

export default Modal

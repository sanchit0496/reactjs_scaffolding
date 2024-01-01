// components/App.js
import RegistrationForm from 'components/RegistrationForm/RegistrationForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleButton } from 'action/AppActions'
import Modal from 'components/Modal/Modal'

const Home = () => {
  const dispatch = useDispatch()
  const isButtonClicked = useSelector(
    (state) => state.authReducer.isButtonClicked,
  )

  const handleToggleButtonClick = () => {
    dispatch(toggleButton())
  }

  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div>
      <h2>Redux Example</h2>
      <button onClick={handleToggleButtonClick}>
        Toggle Button: {isButtonClicked ? 'Clicked' : 'Not Clicked'}
      </button>

      <button onClick={handleOpenForm}>Open Registration Form</button>

      <Modal isOpen={isFormOpen} onClose={handleCloseForm}>
        <RegistrationForm onClose={handleCloseForm} />
      </Modal>
    </div>
  )
}

export default Home

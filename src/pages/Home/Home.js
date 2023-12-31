import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleButton } from 'action/AppActions'
import Modal from 'components/Modal/Modal'
import RegistrationForm from 'components/RegistrationForm/RegistrationForm'
import DataComponent from 'components/DataComponent/DataComponent'
import DateComponent from 'components/DateComponent/DateComponent'
import Button from 'components/Button/Button'
import { mutate } from 'swr'

const Home = () => {
  const dispatch = useDispatch()

  const isButtonClicked = useSelector(
    (state) => state.authReducer.isButtonClicked,
  )

  // State for controlling Modal visibility
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Handler for toggling button click state
  const handleToggleButtonClick = () => {
    dispatch(toggleButton())
  }

  // Handler for opening the registration form modal
  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  // Handler for closing the registration form modal
  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  const submitPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        // After the POST request, revalidate and refetch GET data
        mutate('https://jsonplaceholder.typicode.com/posts')
      })
      .catch((error) => {
        console.error('Error in POST request:', error)
      })
  }

  return (
    <div>
      <h2>Redux Example</h2>

      <Button size="small" onClick={submitPost}>
        POST
      </Button>

      <Button size="small" onClick={handleToggleButtonClick}>
        Toggle Button: {isButtonClicked ? 'Clicked' : 'Not Clicked'}
      </Button>

      <Button size="small" onClick={handleOpenForm}>
        Open The Registration Form
      </Button>

      <Modal isOpen={isFormOpen} onClose={handleCloseForm}>
        <RegistrationForm onClose={handleCloseForm} />
      </Modal>

      <DateComponent />
      <DataComponent />

      <Button size="small">Small Button</Button>
    </div>
  )
}

export default Home

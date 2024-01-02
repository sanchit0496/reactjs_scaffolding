import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RegistrationForm from './RegistrationForm' // Adjust the path as necessary

describe('RegistrationForm', () => {
  // Snapshot Test
  it('renders correctly', () => {
    const { asFragment } = render(<RegistrationForm onClose={() => {}} />)
    expect(asFragment()).toMatchSnapshot()
  })

  // Functional Test - Input Changes and Validation
  it('updates input values and displays validation errors', async () => {
    render(<RegistrationForm onClose={() => {}} />)

    const firstNameInput = screen.getByLabelText('First Name')
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    expect(firstNameInput.value).toBe('John')

    const lastNameInput = screen.getByLabelText('Last Name')
    fireEvent.blur(lastNameInput)
    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument()
    })
  })

  // Functional Test - Form Submission
  it('submits the form', async () => {
    const mockOnClose = jest.fn()
    render(<RegistrationForm onClose={mockOnClose} />)

    // Fill out all required fields
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'John' },
    })
    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'Doe' },
    })
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: '30' } })
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    })
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: 'password123' },
    })

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: /Submit/i }))

    // Wait for onClose to be called
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled()
    })
  })

  // Additional tests can be added for each input field and validation scenario
})

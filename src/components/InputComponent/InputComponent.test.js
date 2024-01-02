import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputComponent from './InputComponent' // Adjust the path as necessary

describe('InputComponent', () => {
  // Snapshot Test
  it('renders correctly', () => {
    const { asFragment } = render(
      <InputComponent label="Test Label" id="test" name="test" type="text" />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  // Functional Test - Rendering and Props
  it('displays the correct label and input type', () => {
    render(
      <InputComponent label="Test Label" id="test" name="test" type="text" />,
    )
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByLabelText('Test Label')).toHaveAttribute('type', 'text')
  })

  // Functional Test - onChange Event
  it('calls onChange event when input changes', () => {
    const handleChange = jest.fn()
    render(
      <InputComponent
        label="Test Label"
        id="test"
        name="test"
        type="text"
        onChange={handleChange}
      />,
    )
    fireEvent.change(screen.getByLabelText('Test Label'), {
      target: { value: 'new value' },
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  // Functional Test - Error Display
  it('displays an error message when error prop is provided', () => {
    const errorMessage = 'Error message'
    render(
      <InputComponent
        label="Test Label"
        id="test"
        name="test"
        type="text"
        error={errorMessage}
      />,
    )
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})

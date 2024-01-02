import React, { useState } from 'react'
import {
  format,
  addDays,
  isBefore,
  addMonths,
  subYears,
  addYears,
  differenceInDays,
} from 'date-fns'

const DateComponent = ({ initialDate = new Date() }) => {
  const [date, setDate] = useState(initialDate)
  const [output, setOutput] = useState('')

  const addDaysToDate = (numberOfDays) => {
    const newDate = addDays(date, numberOfDays)
    setDate(newDate)
    setOutput(
      `Date after adding ${numberOfDays} day(s): ${format(
        newDate,
        'dd/MM/yyyy',
      )}`,
    )
  }

  const compareDates = () => {
    const comparisonDate = new Date()
    const isEarlier = isBefore(date, comparisonDate)
    setOutput(
      `The selected date is ${
        isEarlier ? 'earlier' : 'not earlier'
      } than today.`,
    )
  }

  const addMonthsToDate = () => {
    const newDate = addMonths(date, 1)
    setDate(newDate)
    setOutput(`Date after adding 1 month: ${format(newDate, 'dd/MM/yyyy')}`)
  }

  const subtractYearFromDate = () => {
    const newDate = subYears(date, 1)
    setDate(newDate)
    setOutput(`Date after subtracting 1 year: ${format(newDate, 'dd/MM/yyyy')}`)
  }

  const addYearFromDate = () => {
    const newDate = addYears(date, 1)
    setDate(newDate)
    setOutput(`Date after adding 1 year: ${format(newDate, 'dd/MM/yyyy')}`)
  }

  const calculateDifference = () => {
    const daysDifference = differenceInDays(new Date(), date)
    setOutput(`Difference from today: ${daysDifference} day(s)`)
  }

  return (
    <div>
      <p>Selected Date: {format(date, 'dd/MM/yyyy')}</p>
      <button onClick={() => addDaysToDate(1)}>Add 1 Day</button>
      <button onClick={() => addDaysToDate(7)}>Add 7 Days</button>
      <button onClick={compareDates}>Is Earlier Than Today</button>
      <button onClick={addMonthsToDate}>Add 1 Month</button>
      <button onClick={subtractYearFromDate}>Subtract 1 Year</button>
      <button onClick={addYearFromDate}>Add 1 Year</button>
      <button onClick={calculateDifference}>Days from Today</button>
      <p>{output}</p>
    </div>
  )
}

export default DateComponent

import React from 'react'

const InputComponent = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div>{error}</div>}
    </div>
  )
}

export default InputComponent

// components/RegistrationForm.js
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputComponent from '../InputComponent/InputComponent'

const RegistrationForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      age: Yup.number()
        .positive('Must be a positive number')
        .integer('Must be an integer')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    validateOnBlur: true, // Validate on blur
    validateOnChange: false, // Do not validate on change
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values)
      onClose() // Close the form after submission
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputComponent
        label="First Name"
        id="firstName"
        name="firstName"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && formik.errors.firstName}
      />

      <InputComponent
        label="Last Name"
        id="lastName"
        name="lastName"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && formik.errors.lastName}
      />

      <InputComponent
        label="Age"
        id="age"
        name="age"
        type="text"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && formik.errors.age}
      />

      <InputComponent
        label="Email"
        id="email"
        name="email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />

      <InputComponent
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
      />

      <InputComponent
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm

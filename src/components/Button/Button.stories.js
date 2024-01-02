// Button.stories.js
import React from 'react'
import Button from './Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => <Button>Primary Button</Button>

export const Secondary = () => (
  <Button bgColor="#6c757d">Secondary Button</Button>
)

export const Large = () => <Button size="large">Large Button</Button>

export const Small = () => <Button size="small">Small Button</Button>

export const Outline = () => (
  <Button outline bgColor="#007bff">
    Outline Button
  </Button>
)

export const Disabled = () => <Button disabled>Disabled Button</Button>

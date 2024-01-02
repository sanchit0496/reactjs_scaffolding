// Card.stories.js
import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const Default = () => (
  <Card
    title="Card Title"
    content="This is the card content. It can include any element."
  />
)

export const WithImage = () => (
  <Card
    title="Card Title"
    content="This card has an image on top."
    imageUrl="https://images.pexels.com/photos/19575689/pexels-photo-19575689/free-photo-of-aerial-view-of-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  />
)

// Card.js
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`

const CardTitle = styled.h3`
  margin: 8px 0;
`

const CardContent = styled.div`
  font-size: 14px;
`

const Card = ({ title, content, imageUrl }) => (
  <CardContainer>
    {imageUrl && <CardImage src={imageUrl} alt={title} />}
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
)

export default Card

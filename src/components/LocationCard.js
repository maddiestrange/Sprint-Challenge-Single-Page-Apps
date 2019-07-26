import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return ( 
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{type}-{dimension}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {residents} Residents
      </a>
    </Card.Content>
  </Card>
  )
}

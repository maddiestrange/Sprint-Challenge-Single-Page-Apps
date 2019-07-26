import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (data) {
  return(
  <Card>
    <Image src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>{data.species}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {data.episodes} Episodes
      </a>
    </Card.Content>
  </Card>
  )
}

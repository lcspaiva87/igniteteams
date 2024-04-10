import React from 'react'
import { Image } from 'react-native'
import * as s from './styles'

export function Clases() {
  return (
    <s.Container>
      <Image source={require('../../assets/adaptive-icon.png')} />
      <s.Title>Turmas</s.Title>
      <s.SubTitle>jogue com a sua turma</s.SubTitle>
      <s.Button>
        <Image source={require('../../assets/userGreen.png')} />
        <s.ButtonText>Nome da turma</s.ButtonText>
      </s.Button>
    </s.Container>
  )
}

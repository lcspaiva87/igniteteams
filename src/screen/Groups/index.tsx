import { Header } from 'components/Header'
import { Container } from './styles'
import { Highlight } from 'components/Highlight'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subtitle="Veja os grupos disponíveis" />
    </Container>
  )
}

import { Header } from 'components/Header'
import { Container } from './styles'
import { Highlight } from 'components/Highlight'
import { GroupCard } from 'components/GroupCard'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from 'components/ListEmpty'
import { Button } from 'components/Button'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  useEffect(() => {
    setGroups(['Turma A', 'Turma B', 'Turma C'])
  }, [])
  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subtitle="Veja os grupos disponíveis" />
      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard title={item} />}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Cadastrar turma" onPress={() => {}} />
    </Container>
  )
}

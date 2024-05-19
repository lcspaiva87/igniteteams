import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from 'screen/Groups'
import { NewGroup } from 'screen/NewGroup'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />

      <Screen name="new" component={NewGroup} />
    </Navigator>
  )
}

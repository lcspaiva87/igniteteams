import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from 'screen/Groups'
import { NewGroup } from 'screen/NewGroup'
import { Players } from 'screen/Players'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="players" component={Players} />
      <Screen name="new" component={NewGroup} />
    </Navigator>
  )
}

import theme from 'themes'
import { ThemeProvider } from 'styled-components'
import { Clases } from 'screen/Clases'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import React from 'react'
import { Loading } from 'components/Loading'
import { StatusBar } from 'react-native'
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'transparent'}
      />
      {fontsLoaded ? <Clases /> : <Loading />}
    </ThemeProvider>
  )
}

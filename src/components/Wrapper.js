import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { wrapperStyles } from '../styles/styles'

//  wanted to include a scroll view but this creates a conflict if using
//  a flatlist
const Wrapper = ({children}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={wrapperStyles.wrapper}>
          {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export { Wrapper }
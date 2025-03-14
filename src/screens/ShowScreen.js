import { View, Text } from 'react-native'
import React from 'react'

import { parentStyles } from '../styles/styles'

const ShowScreen = () => {
  return (
    <View>
      <Text style={parentStyles.h2bold}>Show Screen</Text>
    </View>
  )
}

export { ShowScreen }
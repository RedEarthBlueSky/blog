import { View, Text } from 'react-native'
import React from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { parentStyles } from '../styles/styles'

const CreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={parentStyles.h2bold}>Create Screen</Text>
    </View>
  )
}

export { CreateScreen }
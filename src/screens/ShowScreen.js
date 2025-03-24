import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { parentStyles } from '../styles/styles'
import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({ route }) => {
  const { id, title } = route.params.item
  //  we can use this method to pass in the state, but it seems easier just to 
  //  import the object with the correct id as a prop, which is prop drilling so 
  //  not sure maybe this is the point of not to do it
  const { state } = useContext(BlogContext)
  //  anyway it is nice to know another way to do it
  const blogPost = state.find((item) => {return item.id === route.params.item.id})
  //  or is it hehehehe
  return (
    <View style={{padding: 10}}>
      <Text style={parentStyles.h2bold}>Show Screen</Text>
      <Text style={parentStyles.h3bold}>Title:  {title}</Text>
      <Text style={parentStyles.h3bold}>ID:  {id}</Text>
    </View>
  )
}

export { ShowScreen }
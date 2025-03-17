import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import { parentStyles } from '../styles/styles'

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext)

  return (
    <View style={{padding: 10}}>
      <Text style={parentStyles.h2bold}>Index Screen</Text>
      <FlatList 
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text style={parentStyles.h3bold}>{item.title}</Text>
        }}
      />
    </View>
  )
}

export { IndexScreen }
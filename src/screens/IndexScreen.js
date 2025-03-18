import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import { parentStyles } from '../styles/styles'

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext)
  // console.log(blogPosts)
  return (
    <View style={{padding: 10}}>
      <Text style={parentStyles.h2bold}>Index Screen</Text>
      <TouchableOpacity 
        style={parentStyles.TOButton}
        onPress={() => blogPosts.addBlogPost()}
      >
        <Text style={parentStyles.TOButtonText}>Add Blog Post</Text>
      </TouchableOpacity>
      <FlatList 
        data={blogPosts.data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text style={parentStyles.h3bold}>{item.title}</Text>
        }}
      />
    </View>
  )
}

export { IndexScreen }
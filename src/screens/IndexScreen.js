import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { parentStyles } from '../styles/styles'

const IndexScreen = () => {
  const { state, addBlogPost, clearBlogPosts } = useContext(BlogContext)

  return (
    <View style={{padding: 10}}>
      <Text style={parentStyles.h2bold}>Index Screen</Text>
      <TouchableOpacity 
        style={parentStyles.TOButton}
        onPress={addBlogPost}
      >
        <Text style={parentStyles.TOButtonText}>Add Blog Post</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={parentStyles.TOButton}
        onPress={clearBlogPosts}
      >
        <Text style={parentStyles.TOButtonText}>Clear Blog Posts</Text>
      </TouchableOpacity>
      
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item, index }) => {
          return <Text style={parentStyles.h3bold}>{index + 1}. {item.title}</Text>
        }}
      />
    </View>
  )
}

export { IndexScreen }
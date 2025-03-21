import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { parentStyles } from '../styles/styles'
const { TOButton, h3bold, TOButtonText, TOButtonIcon, blogpost } = parentStyles

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, clearBlogPosts, deleteBlogPost } = useContext(BlogContext)
  const buttonData = [{title: 'Add Blog Post', action: addBlogPost},{title: 'Clear Blog Posts', action: clearBlogPosts}]

  return (
    <View style={{padding: 10}}>
      <FlatList 
        data={buttonData}
        keyExtractor={(buttonData) => buttonData.title}
        renderItem={({ item, index }) => {
          return (
            <View style={TOButton}>
              <TouchableOpacity style={TOButton} onPress={item.action}>
                <Text style={TOButtonText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
        )}}
      />
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show')}>
              <View style={blogpost}>
                <Text style={h3bold}>{index + 1}. {item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={TOButtonIcon} name='trash'/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export { IndexScreen }
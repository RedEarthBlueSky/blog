import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { parentStyles as styles } from '../styles/styles'

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, clearBlogPosts, deleteBlogPost } = useContext(BlogContext)
  const buttonData = [
    {title: 'Add Blog Post', action: addBlogPost},
    {title: 'Clear Blog Posts', action: clearBlogPosts},
  ]
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          style={{ 
            alignItems: 'baseline', 
            flexDirection: 'row',
            justifyContent: 'space-evenly', 
            width: 150,}}
          onPress={() => {navigation.navigate('Create')}}
        >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Create Blog</Text>
          <Feather name='plus' size={30} color='white'/>
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View style={{padding: 10}}>
      <FlatList 
        data={buttonData}
        keyExtractor={(buttonData) => buttonData.title}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.TOButton}>
              <TouchableOpacity style={styles.TOButton} onPress={item.action}>
                <Text style={styles.TOButtonText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
        )}}
      />
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('Show', { item: item })}>
              <View style={styles.blogpost}>
                <Text style={styles.h3bold}>{index + 1}. {item.title} - {item.id}</Text>
                <TouchableOpacity 
                  style={{width: 50, alignItems: 'center' }} 
                  onPress={() => deleteBlogPost(item.id)}
                >
                  <Feather style={styles.TOButtonIcon} name='trash'/>
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
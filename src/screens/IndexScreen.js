import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { parentStyles as styles } from '../styles/styles'

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, clearBlogPosts, deleteBlogPost } = useContext(BlogContext)
  //  create the RHS Create Blog button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerLink} 
          onPress={() => {navigation.navigate('Create')}}
        >
          <Text style={styles.HLText}>Create Blog</Text>
          <Feather name='plus' size={30} color='white'/>
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View style={{padding: 10}}>
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('Show', { item: item })}>
              <View style={styles.blogpost}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.h3bold}>{index + 1}. {item.title} - {item.id}</Text>
                  <TouchableOpacity 
                    style={{width: 50, alignItems: 'center' }} 
                    onPress={() => deleteBlogPost(item.id)}
                  >
                    <Feather style={styles.TOButtonIcon} name='trash'/>
                  </TouchableOpacity>
                </View>
                <Text style={styles.h3bold}>{item.content}</Text>
              </View>
              
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export { IndexScreen }
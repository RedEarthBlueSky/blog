import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = (props) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)
  console.log(typeof props)
  return (
    <View>
      <Button 
        title='Add Post'
        onPress={() => addBlogPost()}
      />
      <FlatList 
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <View style={styles.blogRow}>
            <Text style={styles.H5}>id{item.id}: {item.title}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather name="trash" style={styles.H4}/>
            </TouchableOpacity>
          </View>
        }}
      />
    </View>
  )
}

export default IndexScreen
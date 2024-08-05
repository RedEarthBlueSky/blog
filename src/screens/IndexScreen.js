import { View, Text, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)

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
            <Text style={styles.H5}>{item.title}</Text>
            <Feather name="trash" style={styles.H4}/>
          </View>
        }}
      />
    </View>
  )
}

export default IndexScreen
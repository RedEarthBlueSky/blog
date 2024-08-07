import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  //  get the state list of all our blog posts
  const { state } = useContext(Context)

  //  return one blog post based on the id
  const blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam('id')
  })

  return (
    <View>
      <Text style={styles.H4}>Show Screen</Text>
      <Text style={styles.H5}>{blogPost.id}</Text>
      <Text style={styles.H5}>{blogPost.title}</Text>
      <Text style={styles.H5}>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen
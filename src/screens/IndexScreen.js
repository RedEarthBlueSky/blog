import { View, Text, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import BlogContext from '../context/BlogContext'


const IndexScreen = () => {
  //  The job of the Blog Post Provider is to hand down an object 
  //  that has our current blogs and a way to change it in a 
  //  value={{state, update}} format, here is is 
  //  value={{data: blogPosts, addBlogPost}}
  const { data, addBlogPost, setBlogPosts } = useContext(BlogContext)
  return (
    <View>
      <Text style={styles.H1}>Index Screen</Text>
      <Button 
        title='Add Post'
        onPress={addBlogPost}
      />
      <View style={{marginTop: 10}}></View>
      <Button 
        title='Reset Posts'
        onPress={() => setBlogPosts([])}
      />
      <FlatList 
        data={data}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.H5}>
                {item.title}
              </Text>
              <Text style={styles.H6}>
                {item.body}
              </Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export default IndexScreen
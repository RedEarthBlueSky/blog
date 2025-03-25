import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { parentStyles as styles } from '../styles/styles'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(BlogContext)

  return (
    <View style={{alignSelf: 'center', width: '90%'}}>
      <Text style={[styles.h2bold, {marginBottom: 10}]}>Create Screen</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.h3bold}>Title:</Text>
        <TextInput 
          style={styles.input} 
          value={title} 
          onChangeText={(text) => setTitle(text)}
          placeholder='Title...'
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.h3bold}>Content:</Text>
        <TextInput 
          style={styles.input} 
          value={content}
          onChangeText={(text) => setContent(text)}
          multiline
          placeholder='Content...'
        />
      </View>
      <TouchableOpacity style={styles.TOButton} 
        onPress={() => {
          //  add the blog post and then after that is successful initiate call back to go back
          addBlogPost(title, content, () => {
            // navigation.navigate('Index') maybe more precise
            navigation.goBack()
          })
        }}
      >
        <Text style={styles.TOButtonText}>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  )
}

export { CreateScreen }
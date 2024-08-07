import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from '../styles'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const { addBlogPost } = useContext(Context)

  return <View>
      <Text style={styles.screenTitle}>Create Blog Post</Text>
      <Text style={styles.createScreenLabel}>Enter Title:</Text>
      <TextInput 
        onChangeText={text => setTitle(text)}
        placeholder='Title here...'
        style={styles.createScreenInput}
        value={title}
      />
      <Text style={styles.createScreenLabel}>Enter Content:</Text>
      <TextInput 
        maxLength={400}
        multiline={true}
        onChangeText={text => setContent(text)}
        placeholder='Content here...'
        style={styles.createScreenInput}
        value={content}
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index')
        })
      }}>
        <Text style={styles.submitButtonText}>Create Blog Post</Text>
      </TouchableOpacity>
    </View>
}

export default CreateScreen
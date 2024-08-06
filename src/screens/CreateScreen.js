import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from '../styles'

const CreateScreen = () => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
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
      <TouchableOpacity style={styles.submitButton} onPress={() => console.log('pressed')}>
        <Text style={styles.submitButtonText}>Create Blog Post</Text>
      </TouchableOpacity>
    </View>
}

export default CreateScreen
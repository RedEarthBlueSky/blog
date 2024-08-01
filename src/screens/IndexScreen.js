import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import styles from '../styles'

const IndexScreen = () => {

  return (
    <View>
      <Text style={styles.H1}>Index Screen</Text>
      <Button 
        title='Add Post'
        onPress={() => null}
      />
    </View>
  )
}

export default IndexScreen
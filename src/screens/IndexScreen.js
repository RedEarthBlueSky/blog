import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
  const { state, deleteBlogPost } = useContext(BlogContext)

   return (
      <View>
        <FlatList 
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
              <View style={styles.blogRow}>
                <View style={styles.blogColumn}>
                  <Text style={styles.H5}>id:  {item.id}</Text>
                  <Text style={styles.H5}>title:  {item.title}</Text>
                  <Text style={styles.H5}>content:  {item.content}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.H4}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          }}
        />
      </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')} style={styles.createBlogPost}>
          <Feather name="plus" size={30}/>
          <Text style={{fontSize: 16}}>Create</Text>
        </TouchableOpacity>
    ),
    headerStyle: {
      //  only for setting background color
    }
  };
};



export default IndexScreen


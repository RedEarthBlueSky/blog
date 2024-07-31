
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { BlogProvider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

const App = createAppContainer(navigator)

//  blog provider is now wrapping our app to provide props to 
//  deeply nested children of it and App
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}


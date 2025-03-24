import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider as BlogProvider } from "./src/context/BlogContext"
import { IndexScreen, CreateScreen, EditScreen, ShowScreen } from './src/screens/'
import { TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Index" component={IndexScreen} 
          options={{ 
            title: "Blog List",
            headerStyle: {
              backgroundColor: '#e31cad',
            },
            headerTintColor: '#fff', // adjusts the title text color
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20, },
          }}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
//  custom component returns App - no sure needed, export default App = seems just as good
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}


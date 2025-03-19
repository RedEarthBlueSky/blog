import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider as BlogProvider } from "./src/context/BlogContext"
import { IndexScreen, CreateScreen, EditScreen, ShowScreen } from './src/screens/'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{ headerTitle: "Blogs" }}>
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//  custom component returns App - no sure needed
//  export default App = seems just as good
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}


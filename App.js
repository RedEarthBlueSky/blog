import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import IndexScreen from './src/screens/IndexScreen'

const Stack = createStackNavigator()

import { appStyles, parentStyles } from './src/styles/styles'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{ headerTitle: "Blogs" }}>
        <Stack.Screen name="Index" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

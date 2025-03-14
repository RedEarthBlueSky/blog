import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { CreateScreen } from './src/screens/CreateScreen'
import { EditScreen } from './src/screens/EditScreen'
import { IndexScreen } from './src/screens/IndexScreen'
import { ShowScreen } from "./src/screens/ShowScreen"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Index' 
        screenOptions={{ headerTitle: "Blogs" }}
      >
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//  restructure to all - potentially - a provider to wrap App
export default App

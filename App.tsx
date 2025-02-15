import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ThemeProvider } from "./src/contexts/ThemeContext"
import ProjectPage from "./src/screens/ProjectPage"
import type { RootStackParamList } from "./src/types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProjectPage">
          <Stack.Screen name="ProjectPage" component={ProjectPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App


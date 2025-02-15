import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "../types"
import { useTheme } from "../contexts/ThemeContext"
import Logo from "../components/Logo"
import Card from "../components/Card"

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const { theme, toggleTheme } = useTheme()

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.header}>
        <Logo />
        <Text style={[styles.title, { color: theme.textColor }]}>Hajj Authentication System</Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>
          Enhancing security and streamlining pilgrim verification
        </Text>
      </View>

      <Card title="Authentication">
        <Text style={{ color: theme.textColor }}>Secure NFC and biometric verification for pilgrims.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Authentication")}>
          <Text style={styles.buttonText}>Start Authentication</Text>
        </TouchableOpacity>
      </Card>

      <Card title="Our Team">
        <Text style={{ color: theme.textColor }}>Meet the dedicated professionals behind HAS.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Team")}>
          <Text style={styles.buttonText}>View Team</Text>
        </TouchableOpacity>
      </Card>

      <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
        <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#006B6B",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  themeToggle: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
})

export default HomeScreen


import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "../contexts/ThemeContext"

interface CardProps {
  title: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  const { theme } = useTheme()

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{title}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
})

export default Card


"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useColorScheme } from "react-native"

interface Theme {
  colors: {
    background: string
    text: string
    primary: string
    card: string
    error: string
  }
}

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const lightTheme: Theme = {
  colors: {
    background: "#F5F5F5",
    text: "#333333",
    primary: "#006B6B",
    card: "#FFFFFF",
    error: "#FF0000",
  },
}

const darkTheme: Theme = {
  colors: {
    background: "#333333",
    text: "#F5F5F5",
    primary: "#B5A36A",
    card: "#4A4A4A",
    error: "#FF6B6B",
  },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme()
  const [theme, setTheme] = useState<Theme>(colorScheme === "dark" ? darkTheme : lightTheme)

  useEffect(() => {
    setTheme(colorScheme === "dark" ? darkTheme : lightTheme)
  }, [colorScheme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}


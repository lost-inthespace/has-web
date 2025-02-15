"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native"
import { useTheme } from "../contexts/ThemeContext"
import Card from "../components/Card"

const AuthenticationScreen = () => {
  const { theme } = useTheme()
  const [step, setStep] = useState(1)

  const handleNFCScan = () => {
    // Simulating NFC scan
    setTimeout(() => {
      Alert.alert("NFC Scan", "NFC card scanned successfully!")
      setStep(2)
    }, 2000)
  }

  const handleFingerprint = () => {
    // Simulating fingerprint scan
    setTimeout(() => {
      Alert.alert("Fingerprint Scan", "Fingerprint verified successfully!")
      setStep(3)
    }, 2000)
  }

  const handleComplete = () => {
    Alert.alert("Authentication Complete", "You have been successfully authenticated!")
    setStep(1)
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Card title="Authentication Process">
        <Text style={[styles.stepText, { color: theme.textColor }]}>Step {step} of 3</Text>
        {step === 1 && (
          <>
            <Text style={{ color: theme.textColor }}>Please scan your NFC card.</Text>
            <TouchableOpacity style={styles.button} onPress={handleNFCScan}>
              <Text style={styles.buttonText}>Scan NFC</Text>
            </TouchableOpacity>
          </>
        )}
        {step === 2 && (
          <>
            <Text style={{ color: theme.textColor }}>Please provide your fingerprint.</Text>
            <TouchableOpacity style={styles.button} onPress={handleFingerprint}>
              <Text style={styles.buttonText}>Scan Fingerprint</Text>
            </TouchableOpacity>
          </>
        )}
        {step === 3 && (
          <>
            <Text style={{ color: theme.textColor }}>Authentication successful!</Text>
            <TouchableOpacity style={styles.button} onPress={handleComplete}>
              <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
          </>
        )}
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  stepText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
})

export default AuthenticationScreen


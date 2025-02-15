import { Image, StyleSheet } from "react-native"

const Logo = () => {
  return (
    <Image
      source={{
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAS-logo%20(1)-mxOJ9ldzrpzS7XoBCFv767m5E0u13u.png",
      }}
      style={styles.logo}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
})

export default Logo


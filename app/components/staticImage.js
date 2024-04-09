import { StyleSheet, View, Image } from 'react-native'

export default function StaticImage() {
  return (
    <Image
      source={{
        uri: 'https://picsum.photos/200/300',
        width: 200,
        height: 300,
      }}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    padding: 20,
    borderRadius: 5,
  },
})

import { StatusBar } from 'expo-status-bar'
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Button, Alert} from 'react-native'

export default function App() {
    console.log('testing debug')

    const handleButtonPress = () => {
        Alert.alert('ANSWER ME!', 'Why did you press this button? Whyyyyyy????', [
            {
            text: 'I failed as a human',
            onPress: () => console.log('lies!')
        },
            {
                text: 'I am sorry!',
                onPress: () => console.log('regrets!')
            }])

    }
  return (
    <View style={styles.container}>
      <Text onPress={() => console.log('Hei back!')}>Hei hei</Text>
      <Text numberOfLines={1}>This is kinda cool and it truncates automagically like some kind of wizard feature or something</Text>
      <StatusBar style='auto' />
        <TouchableOpacity onPress={() => console.log('Press!')}>
            {/*<Image source={require('./assets/splash.png')} />*/}
            <Image source={{
                uri: 'https://picsum.photos/200/300',
                width: 200,
                height: 300
            }} style={styles.image} />
        </TouchableOpacity>
        <Button title={'CLICK MEEEEE!'} onPress={handleButtonPress} color={'darkgreen'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
      paddingTop: 25
    // alignItems: 'center',
    // justifyContent: 'center',
  },
    image: {
        marginTop: 25
    },
})

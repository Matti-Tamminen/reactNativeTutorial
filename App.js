import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  Platform,
  useWindowDimensions,
} from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import StaticImage from './app/components/staticImage'

export default function App() {
  console.log('testing debug')

  const { height, width, scale, fontScale } = useWindowDimensions()
  const orientation = useDeviceOrientation()

  console.log(orientation === 'landscape')

  const handleButtonPress = () => {
    Alert.alert('ANSWER ME!', 'Why did you press this button? Whyyyyyy????', [
      {
        text: 'I failed as a human',
        onPress: () => console.log('lies!'),
      },
      {
        text: 'I am sorry!',
        onPress: () => console.log('regrets!'),
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text onPress={() => console.log('Hei back!')}>Hei hei</Text>
        <Text numberOfLines={1}>
          This is kinda cool and it truncates automagically like some kind of wizard feature or something
        </Text>
        {orientation === 'portrait' ? <Text>Portrait</Text> : <Text>Landscape</Text>}
      </View>
      <View style={styles.imageBlock}>
        <TouchableOpacity onPress={() => console.log('Press!')}>
          {/*<Image source={require('./assets/splash.png')} />*/}
          <StaticImage />
        </TouchableOpacity>
      </View>
      <View style={styles.footerBlock}>
        <Button title={'CLICK MEEEEE!'} onPress={handleButtonPress} color={'darkgreen'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  imageBlock: {
    flex: 3,
    backgroundColor: 'lime',
  },
  footerBlock: {
    flex: 1,
    width: '50%',
    height: '100%',
    backgroundColor: 'rose',
    justifyContent: 'flex-end',
  },
})

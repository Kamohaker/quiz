import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, StatusBar} from 'react-native'
import { colors } from 'theme'
import {NativeBaseProvider, VStack , Button,Image,Text} from 'native-base'
import logo from './logo.png'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
   
  },
  title: {
    fontSize: 44,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => (
  <NativeBaseProvider>
  <View style={styles.root}>
   
    <StatusBar barStyle="light-content" />
    <Text bold italic underline fontSize="5xl" color={colors.orange}>Oblicz to!</Text>
    <Image alt="Logo" source={logo}  style={{ width: 400, height: 259 }} />
    <VStack space={4} alignItems="center" >
    <Button
    borderWidth= "4"
    borderColor={colors.darkYellow}
    _text={{ color:colors.darkYellow}}
    size={'lg'}
     width='40'
     borderRadius= {100}
     backgroundColor= {colors.yellow}
     onPress={() => {
      navigation.navigate('Gra', { from: 'Home' ,nazwa:'Dodawanie'})
    }}>Dodawanie</Button>
   <Button
    borderWidth= "4"
    borderColor={colors.darkRed}
    _text={{ color:colors.darkRed}}
   size={'lg'}
   width='40'
    borderRadius= {100}
     backgroundColor={colors.red}
     color="white"
     onPress={() => {
      navigation.navigate('Gra', { from: 'Home',nazwa:'Odejmowanie' })
    }}>Odejmowanie</Button>
     <Button
     borderWidth= "4"
     borderColor={colors.darkGreen}
     _text={{ color:colors.darkGreen}}
     size={'lg'}
     width='40'
      borderRadius= {100}
     backgroundColor={colors.green}
     color="white"
     onPress={() => {
      navigation.navigate('Gra', { from: 'Home',nazwa:'Mnożenie' })
    }}>Mnożenie</Button>
     <Button
     borderWidth= "4"
     borderColor={colors.darkBlue}
     _text={{ color:colors.darkBlue}}
     size={'lg'}
     width='40'
      borderRadius= {100}
     backgroundColor={colors.blue}
     color="white"
     onPress={() => {
      navigation.navigate('Gra', { from: 'Home',nazwa:'Dzielenie' })
    }}>Dzielenie</Button>
    </VStack>
   
  </View>
  </NativeBaseProvider>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home

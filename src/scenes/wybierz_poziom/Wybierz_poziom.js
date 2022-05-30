import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import {Button, NativeBaseProvider,VStack} from 'native-base'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Wybierz_poziom = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
      <NativeBaseProvider>
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`Wybierz_poziom (from ${from})`}</Text>
      <VStack space={4} alignItems="center">
      <Button
     backgroundColor={colors.lightPurple}
     color="white"
     onPress={() => {
      navigation.navigate('Details', { from: 'Home' })
    }}>Bardzo łatwy</Button>
     <Button
     backgroundColor={colors.lightPurple}
     color="white"
     onPress={() => {
      navigation.navigate('Details', { from: 'Home' })
    }}>Łatwy</Button>
     <Button
     backgroundColor={colors.lightPurple}
     color="white"
     onPress={() => {
      navigation.navigate('Details', { from: 'Home' })
    }}>Średni</Button>
     <Button
     backgroundColor={colors.lightPurple}
     color="white"
     onPress={() => {
      navigation.navigate('Details', { from: 'Home' })
    }}>Trudny</Button>
    </VStack>
    </View>
    </NativeBaseProvider>
  )
}

Wybierz_poziom.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Wybierz_poziom.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Wybierz_poziom

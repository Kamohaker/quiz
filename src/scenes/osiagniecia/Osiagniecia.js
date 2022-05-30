import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color:colors.orange,
    fontWeight: 'bold'

  },
})

const Osiagniecia = ({ route, navigation }) => {
 

  return (
    
    <View style={styles.root}>
      <Text style={styles.title}>Twoje osiągnięcia</Text>
      <FontIcon name="trophy" size={140} color={colors.yellow}/>
      <Text style={styles.title}>Liczba punktów:</Text>
      
      <Button
        title="Menu główne"
        color={colors.darkPink}

        backgroundColor={colors.pink}
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </View>
  )
}

Osiagniecia.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Osiagniecia.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Osiagniecia

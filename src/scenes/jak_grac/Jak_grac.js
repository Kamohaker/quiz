import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View,Image} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import {Box,NativeBaseProvider,ScrollView} from 'native-base'
import dalej from './dalej.jpg'
import pt from './pt.jpg'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    color: colors.orange
 
  },
  teksts: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.white
  },
})

const Jak_grac = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <NativeBaseProvider>
    <ScrollView style={{backgroundColor: colors.purple}}>
      <View style={styles.root}>
      <Text style={styles.title}>
       Jak grać? 
      </Text>
      <Text style={styles.teksts}>
        Na górze wyświetlają się pytania:
      </Text >
      <Box borderWidth= "4" borderColor={colors.blue}  marginTop= "10" marginLeft="5" width = "225"  bg="primary.500" p="4" rounded="2xl" shadow={2} _text={{
                 fontSize: "50",
                 fontWeight: "bold",
                 color: colors.yellow, 
                 }}>2 X 8 =
                </Box>
      <Text style={styles.teksts}>
       Kliknij na prostokąt z poprawną odpowiedzią:
      </Text>
      <Box  alignItems= 'center' marginTop= "10"  width = "350"  bg={colors.yellow} p="4" rounded="2xl" shadow={2} _text={{
                 fontSize: "50",
                 color: colors.purple, 
                 }}>16
                </Box>
      <Text style={styles.teksts}>
        Za dobrą odpowiedź dostajesz punkt: 
      </Text>
      <Image alt="pt" source={pt}  style={{ width: 150, height: 90 }} />
      <Text style={styles.teksts}>
        Po udzieleniu odpowiedzi pojawia się przycisk "Dalej":
        </Text> 
        <Image alt="dalej" source={dalej}  style={{ width: 400, height: 80 }} />
        <Text style={styles.teksts}>
        Naciśnij go w celu przejścia do kolejnego pytania
      </Text>
     
      </View>
    </ScrollView>
    </NativeBaseProvider>
  )
}

Jak_grac.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Jak_grac.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Jak_grac

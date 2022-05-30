import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, StatusBar,} from 'react-native'
import Button from 'components/Button'
import {Box,VStack,HStack,NativeBaseProvider} from 'native-base'
import { colors } from 'theme'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6d28d9',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color:colors.orange,
    fontWeight: "bold"
  },
})

const Tabliczka = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <NativeBaseProvider>
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Tabliczka mnożenia</Text>
      <VStack space={2}> 
        <HStack space={2}>
          <Box borderWidth= "4" borderColor={colors.darkYellow} bg={colors.yellow} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>1x1=1</Text>
              <Text>1x2=2</Text>
              <Text>1x3=3</Text>
              <Text>1x4=4</Text>
              <Text>1x5=5</Text>
              <Text>1x6=6</Text>
              <Text>1x7=7</Text>
              <Text>1x8=8</Text>
              <Text>1x9=9</Text>
              <Text>1x10=10</Text>
            </VStack>
          </Box>
          <Box borderWidth= "4" borderColor={colors.orange} bg={colors.lightOrange} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>2x1=2</Text>
              <Text>2x2=4</Text>
              <Text>2x3=6</Text>
              <Text>2x4=8</Text>
              <Text>2x5=10</Text>
              <Text>2x6=12</Text>
              <Text>2x7=14</Text>
              <Text>2x8=16</Text>
              <Text>2x9=18</Text>
              <Text>2x10=20</Text>
            </VStack>
          </Box>
          <Box borderWidth= "4" borderColor={colors.darkOrange} bg={colors.orange} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>3x1=3</Text>
              <Text>3x2=6</Text>
              <Text>3x3=9</Text>
              <Text>3x4=12</Text>
              <Text>3x5=15</Text>
              <Text>3x6=18</Text>
              <Text>3x7=21</Text>
              <Text>3x8=24</Text>
              <Text>3x9=27</Text>
              <Text>3x10=30</Text>
            </VStack>
          </Box>
          <Box borderWidth= "4" borderColor={colors.darkRed} bg={colors.red} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>4x1=4</Text>
              <Text>4x2=8</Text>
              <Text>4x3=12</Text>
              <Text>4x4=16</Text>
              <Text>4x5=20</Text>
              <Text>4x6=24</Text>
              <Text>4x7=28</Text>
              <Text>4x8=32</Text>
              <Text>4x9=36</Text>
              <Text>4x10=40</Text>
            </VStack>
          </Box>
        </HStack>
        <HStack space={2}>
        
          <Box borderWidth= "4" borderColor={colors.darkPink} bg={colors.pink} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>5x1=5</Text>
              <Text>5x2=10</Text>
              <Text>5x3=15</Text>
              <Text>5x4=20</Text>
              <Text>5x5=25</Text>
              <Text>5x6=30</Text>
              <Text>5x7=35</Text>
              <Text>5x8=40</Text>
              <Text>5x9=45</Text>
              <Text>5x10=50</Text>
            </VStack>
          </Box>
          <Box borderWidth= "4" borderColor={colors.darkPurple} bg={colors.purple} rounded="2xl" width = "90" alignItems= 'center' >
            <VStack>
              <Text>6x1=6</Text>
              <Text>6x2=12</Text>
              <Text>6x3=18</Text>
              <Text>6x4=24</Text>
              <Text>6x5=30</Text>
              <Text>6x6=36</Text>
              <Text>6x7=42</Text>
              <Text>6x8=48</Text>
              <Text>6x9=54</Text>
              <Text>6x10=60</Text>
            </VStack>
          </Box>
          <Box borderWidth= "4" borderColor={colors.darkBlue} bg={colors.blue} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>7x1=7</Text>
              <Text>7x2=14</Text>
              <Text>7x3=21</Text>
              <Text>7x4=28</Text>
              <Text>7x5=35</Text>
              <Text>7x6=42</Text>
              <Text>7x7=49</Text>
              <Text>7x8=56</Text>
              <Text>7x9=63</Text>
              <Text>7x10=70</Text>
            </VStack>
          </Box>
          <Box borderWidth= "4" borderColor={colors.blue} bg={colors.lightBlue} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>8x1=8</Text>
              <Text>8x2=16</Text>
              <Text>8x3=24</Text>
              <Text>8x4=32</Text>
              <Text>8x5=40</Text>
              <Text>8x6=48</Text>
              <Text>8x7=56</Text>
              <Text>8x8=64</Text>
              <Text>8x9=72</Text>
              <Text>8x10=80</Text>
            </VStack>
          </Box>
       
        </HStack>
        <HStack space={2}>
       
          <Box  marginBottom={10} borderWidth= "4" borderColor={colors.green} bg={colors.lightGreen} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>9x1=9</Text>
              <Text>9x2=18</Text>
              <Text>9x3=27</Text>
              <Text>9x4=36</Text>
              <Text>9x5=45</Text>
              <Text>9x6=54</Text>
              <Text>9x7=63</Text>
              <Text>9x8=72</Text>
              <Text>9x9=81</Text>
              <Text>9x10=90</Text>
            </VStack>
          </Box>
          <Box marginBottom={10} borderWidth= "4" borderColor={colors.darkGreen} bg={colors.green} rounded="2xl" width = "90"  alignItems= 'center' >
            <VStack>
              <Text>10x1=10</Text>
              <Text>10x2=20</Text>
              <Text>10x3=30</Text>
              <Text>10x4=40</Text>
              <Text>10x5=50</Text>
              <Text>10x6=60</Text>
              <Text>10x7=70</Text>
              <Text>10x8=80</Text>
              <Text>10x9=90</Text>
              <Text>10x10=100</Text>
            </VStack>
          </Box>
        </HStack>
      </VStack>
      <Button
        title="Cofnij"
        color={colors.darkOrange}
        backgroundColor={colors.orange}
        onPress={navigation.goBack}
      />
    </View>
    </NativeBaseProvider>
  )
}

Tabliczka.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Tabliczka.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Tabliczka

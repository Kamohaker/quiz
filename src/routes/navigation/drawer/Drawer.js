import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import TabliczkaScreen from '../../../scenes/tabliczka'
import Jak_gracScreen from '../../../scenes/jak_grac'
import OsiagnieciaScreen from '../../../scenes/osiagniecia/Osiagniecia'
import Wybierz_poziomScreen from '../../../scenes/wybierz_poziom'
import GraScreen from '../../../scenes/gra'
import colors from '../../../theme/colors'


const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Gra')
  newState.routes = newState.routes.filter((item) => item.name !== 'Jak grac')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator drawerStyle={{ backgroundColor: colors.purple }} 
  drawerContentOptions={{ 
    inactiveTintColor: 'white',
    activeTintColor:'#f97316'
  }} initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Menu główne" component={TabNavigator} 
     options={{drawerIcon:({color})=>(
      <FontIcon name="home" size={30} color={colors.yellow}/>)}}/>
    <Drawer.Screen 
    name="Tabliczka" 
    component={TabliczkaScreen} options={{drawerIcon:({color})=>(
      <FontIcon name="percentage" size={30} color={colors.red}/>)}}/>
     <Drawer.Screen 
    name="Jak grac" 
    component={Jak_gracScreen} options={{drawerIcon:({color})=>(
      <FontIcon name="question" size={30} color={colors.yellow}/>)}}/>
    <Drawer.Screen 
    name="Osiagniecia" 
    component={OsiagnieciaScreen} options={{drawerIcon:({color})=>(
      <FontIcon name="trophy" size={30} color={colors.green}/>)}}/>
    <Drawer.Screen 
    name="Wybierz poziom" 
    component={Wybierz_poziomScreen} options={{drawerIcon:({color})=>(
      <FontIcon name="filter" size={30} color={colors.blue}/>)}}/>
     <Drawer.Screen 
    name="Gra" 
    component={GraScreen} options={{drawerIcon:({color})=>(
      <FontIcon name="graduation-cap" size={30} color="#f97316"/>)}}/>
  </Drawer.Navigator>
)

export default DrawerNavigator

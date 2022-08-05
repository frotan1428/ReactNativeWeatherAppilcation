import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FaIcon from "@expo/vector-icons/FontAwesome5";


const Drawer = createDrawerNavigator();
import React from 'react'
import ProfileScreen from './Screens/ProfileScreen';
import FlowersScreen from './Screens/FlowersScreen';
import SettingsScreen from './Screens/SettingsScreen';
import DrawerContent from './components/DrawerContent';
import MyCity from './Screens/MyCity';
import HomeTabsScreen from './Screens/HomeTabsScreen';

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="followers" screenOptions={{
      drawerType:"slide",   //front, back, slide, permanent
      drawerPosition:"left",
      drawerActiveTintColor:"#EDEDED",
      drawerStyle: styles.drawer,
      drawerLabelStyle: styles.label,
    }}
    drawerContent={ (props)=> <DrawerContent {...props}/>}
    >
       <Drawer.Screen name="home" component={MyCity} options={{
        title:"Weahter",
        drawerIcon: ()=> <FaIcon name="cloud"/>

      }} />

<Drawer.Screen name="HomeScreen" component={HomeTabsScreen} options={{
        title:"OtherCity",
        drawerIcon: ()=> <FaIcon name="city"/>

      }} />
      <Drawer.Screen name="profile" component={ProfileScreen} options={{
        title:"Profile",
        drawerIcon: ()=> <FaIcon name="user"/>

      }} />
      <Drawer.Screen name="Flowers" component={FlowersScreen} options={{
        title:"Fllowers",
        drawerIcon: ()=> <FaIcon name="users"/>

      }}  />
      <Drawer.Screen name="Setting" component={SettingsScreen} 
      options={{
        title:"Setting",
        drawerIcon: ()=> <FaIcon name="cog" />

      }} />
    </Drawer.Navigator>

  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  drawer:{
    backgroundColor:"#FF4848"
  },
  label:{
    marginLeft:-20
  }
})
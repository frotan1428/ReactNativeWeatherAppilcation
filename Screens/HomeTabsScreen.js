import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FaIcon from "@expo/vector-icons/FontAwesome5";
import MyCity from './MyCity';
import City5 from './City5';
import City2 from './City2';

const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  return (
    <Tab.Navigator initialRouteName='City2' screenOptions={{
        tabBarStyle:styles.tabbar,
        tabBarLabelStyle:styles.label,
        headerShown:false
       
    }}>
     <Tab.Screen name="City2" component={City2} options={{
        tabBarLabel:"Kabul",
        tabBarIcon: ()=> <FaIcon name="cloud" size={20}/>
      }}/>
      <Tab.Screen name="City5" component={City5} options={{
         tabBarLabel:"Herat",
        tabBarIcon: ()=> <FaIcon name="cloud-rain" size={20}/>
      }}/>

    </Tab.Navigator>
  )
}

export default HomeTabsScreen

const styles = StyleSheet.create({
    tabbar:{
       height:60
    },
    label:{ 
        fontSize:15,
        marginTop:10
    }
})
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from "react-navigation"
import {createStackNavigator} from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'

import globalStyle from './Style'

import Home from './components/screens/menus/Home'
import About from './components/screens/menus/About'
import Profile from './components/screens/menus/Profile'
import Game1 from './components/screens/games/Game1'

class HomeScreen extends React.Component {
    render() {      
        return (
          <View style={{flex:1}}>
          </View>
        )
       
    }
}

const TabNavigator =  createMaterialTopTabNavigator (
  {
    Profile: { 
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-settings" size={25} color={tintColor}/>
        )
      })
    },
    Home: { 
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-home" size={32} color={tintColor} />
        )
      })
    },
    About: { 
      screen: About ,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-information-circle" size={25} color={tintColor} />
        )
      })
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: globalStyle.tabBarOptions,
  }
);

const Tabs = createStackNavigator(

  {
      Main: {
          screen: TabNavigator
      },
      Game: {
          screen: Game1
      }
  },
  {
      headerMode: 'none',
  }

)
export default createAppContainer(Tabs)

//export default createAppContainer(TabNavigator)
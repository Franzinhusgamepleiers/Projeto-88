import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar
} from "react-native";

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default class HomeScreen extends Component{
  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View Style={styles.titleBar}>
            <Text style ={styles.titleText}>App</Text>
            <Text style ={styles.titleText}>Estelar</Text>
          </View>
      </View>
     )
    }
  }

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidaSafeArea}/>
          <View style={styles.titleBar}>
            <Text style ={styles.titleText}>App</Text>
            <Text style ={styles.titleText}>Estelar</Text>
          </View>
          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Nave Espacial</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Mapa Estelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Imagens Diárias</Text>
          </TouchableOpacity>
      </View>
    )
  }
}


export default App;
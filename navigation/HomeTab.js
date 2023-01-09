import React from "react";

//import navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import screens
import Home from "../screens/Home";
import { Favoris } from '../screens/favoriteScreen';
import { Settings } from '../screens/settingScreen';
//import styles and assets
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();


const HomeTab = ({ navigation, route }) => (
  <Tab.Navigator
 
  >
    <Tab.Screen

      name="Exploration"
      component={Home}
      options={{
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: true,
        headerShadowVisible: false,
       
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="globe-africa" color={color} size={30} />
        ),
      }}
    />

    <Tab.Screen
      name="Favoris"
      component={Favoris}
      options={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: true,

        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={30} />
        ),
      }}
    />

  </Tab.Navigator>
);

export default HomeTab;

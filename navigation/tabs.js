import Icon from "@expo/vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Favoris } from '../screens/favoriteScreen';
import { Settings } from '../screens/settingScreen';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        initialRouteName='HomePage'
        screenOptions={({ route }) => ({
            headerShown: false,
            
            tabBarStyle: {
                height:60, 
                elevation: 0, 
                borderTopWidth: 0, 
                backgroundColor: "#000", 
                // borderTopStartRadius: 15, 
                // borderTopEndRadius: 15,
            },
            tabBarIcon: ({ focused, iconName }) => {
                if (route.name === 'Accueil'){
                    iconName = 'home'
                } else if (route.name === 'Favoris'){
                    iconName = 'bookmark'
                } else if (route.name === 'Recherche'){
                    iconName = 'search'
                } else {
                    iconName = 'gear'
                }
                return <Icon name={iconName} size={30} color={focused ? "blue" : 'white'} />;
            },
            tabBarShowLabel: false,
            
        })}
        >
            <Tab.Screen name="Accueil" component={Home}/>
            <Tab.Screen options={{
                tabBarBadge:12
            }} name="Favoris" component={Favoris}/>
            <Tab.Screen name="Parametres" component={Settings}/>
        </Tab.Navigator>
    )
}

export default Tabs
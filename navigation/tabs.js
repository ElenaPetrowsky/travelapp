import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home} from '../screens/homeScreen';
import { Favoris} from '../screens/favoriteScreen';
import { Settings} from '../screens/settingScreen';
import { Search } from '../screens/searchScreen';
import Icon from "@expo/vector-icons/Octicons"
import COLORS from "../config/COLORS";

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
                backgroundColor: COLORS.dark, 
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
                return <Icon name={iconName} size={30} color={focused ? COLORS.blue : 'white'} />;
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
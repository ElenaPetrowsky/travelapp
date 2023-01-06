import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home} from '../screens/homeScreen';
import { Favoris} from '../screens/favoriteScreen';
import { Settings} from '../screens/settingScreen';
import { Search } from '../screens/searchScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={Home} />
            <Tab.Screen name="Recherche" component={Search} />
            <Tab.Screen name="Parametres" component={Settings} />
            <Tab.Screen name="Favoris" component={Favoris} />
        </Tab.Navigator>
    )
}

export default Tabs
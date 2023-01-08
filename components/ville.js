import React from "react";
import { View, Text, TextInput , ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'


export const Ville = ( {image="../images/paris.jpg", description, iconName, name, airport, country, city, location} ) => {
    return (
        <View style={style.cadre}>
        <Image
          source={image}
          style={{ width: "100%", borderRadius: 10, height: "70%" }}
        />
        <View style={{flexDirection: "row",width: "100%",alignItems: "center"}}>
          <View style={style.cadre2}>
            <Text style={style.texte}>
              {description}
            </Text>
            <SimpleLineIcons style={{flex: 1, alignSelf: "center"}} name={iconName} size={25} color="#ff5c83" />
          </View>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
    cadre:{
        backgroundColor: "#FEFEFE",
        height: 280,
        width: 230,
        borderRadius: 15,
        padding: 5,
        marginHorizontal: 10,
    },
    cadre2: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: "row",
        alignContent: "space-between"
    },
    texte:{
        flex: 5,
        //fontFamily: "RobotoRegular",
        fontSize: 11,
        color: "#a2a2db",
    }
})
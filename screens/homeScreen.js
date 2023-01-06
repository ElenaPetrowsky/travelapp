import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SPACING from "../config/SPACING";

export function Home(){
    return(
        <View style={style.container}>
            <Text style={style.head}> Favoris </Text>
            <Text style={style.head}> Rechercher </Text>
            <Text style={style.head}> Tests </Text>
            <Image 
                source={require("")}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        paddingTop:SPACING * 7,
        padding: SPACING * 2,
    },
    head:{
        fontSize:SPACING*2, 
        fontWeight:"bold"
    }
})
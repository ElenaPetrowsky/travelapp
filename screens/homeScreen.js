import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SPACING from "../config/SPACING";

export function Home(){
    return (
        <Text> Accueil </Text>
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
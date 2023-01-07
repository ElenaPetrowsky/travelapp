import React from "react";
import COLORS from '../config/COLORS'
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native'

export function Settings() {
    return (
        <ImageBackground 
            source={ require("../assets/backg9.jpg")} 
            resizeMode="cover"
            style={{width:"100%", height:"100%"}}>
                <View style={style.container}>

                </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
})
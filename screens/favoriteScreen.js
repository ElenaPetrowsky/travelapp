import React from "react";
import COLORS from '../config/COLORS'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

export function Favoris() {
    return (
        <View style={style.container}>
            <Text> Mes Favoris </Text>
            <Button 
                title="Bouton"
                onPress={()=>{alert('Click sur le bouton')}}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.dark
    }
})
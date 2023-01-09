import React from "react";
import {
    Button,
    StyleSheet, Text, View
} from 'react-native';

export function Search() {
    return (
        <View style={style.container}>
            <Text style={{fontSize: SPACING*4, fontWeight:"bold", color:"grey"}}> Mes Recherches</Text>
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
        backgroundColor: "white"
    }
})
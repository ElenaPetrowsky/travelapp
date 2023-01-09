import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";


export function Search(){
    const [search, setSearch] = useState("")
    return (
        <View style={style.view}>
            <TextInput
                onChangeText={setSearch}
                value={search}
                label="Rechercher un lieu"
                style = {style.input}
                placeholder="Rechercher"
                selectTextOnFocus={true}
                right={<TextInput.Icon icon="magnify"/>}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginTop:40,
        backgroundColor: "purple",
        borderTopStartRadius:25,
        borderTopEndRadius:25,
        height: 70,
        width:"90%"
    },
    view: {
        width: "100%",
        alignItems: "center",

    }
})
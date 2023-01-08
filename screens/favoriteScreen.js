import React from "react";
import { places } from "../config/DATA";
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome5'
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native'
import COLORS from "../config/COLORS";


// export function Favoris() {
//     return (
//         <View style={style.container}>
//             <ScrollView>
//                 <View>
//                 {places.map((places) => {
//                     return (
//                     <View>
//                         <Text style={style.item}>{places.name}</Text>
//                     </View>
//                     );
//                 })}
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

export const Favoris = () => {
    return (
        <View style= {{ flex:1}}>
            <FlatList
                data={places}
                keyExtractor={item=>item.entityId}
                renderItem={({item, index})=>{
                    return (
                        <View style={{flexDirection: "row"}}>
                            <FontAwesomeIcon
                                {...((item)=>{
                                    let iconName = ""
                                    let iconColor = ""
                                    switch (item.type) {
                                        case "PLACE_TYPE_AIRPORT":
                                            iconName = "plane-departure"
                                            iconColor = "#a2a2db"
                                            break;
                                        case "PLACE_TYPE_COUNTRY":
                                            iconName = "globe-africa"
                                            iconColor = "#5facdb"
                                            break;
                                        default:
                                            iconName = "map-marked"
                                    }

                                    return {name:iconName, size:45, color: iconColor};
                                })(item)}
                            />
                            <View>
                                <Text style={{color: COLORS.dark, fontSize:18}}> {item.name} </Text>
                                <Text> {item.cityName} ({item.iataCode}), {item.countryName} </Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    }
  });
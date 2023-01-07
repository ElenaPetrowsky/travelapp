import React from "react";
import { View, Text, TextInput , ScrollView, TouchableOpacity,  StyleSheet, Image, Button, ImageBackground} from "react-native";
import SPACING from "../config/SPACING";
import COLORS from "../config/COLORS";
import { Search } from "../components/search";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons"
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons"

export function Home() {
    return (
        <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            paddingHorizontal: 40,
            justifyContent: "space-between",
          }}
        >
          <Octicons name="apps" size={30} color={COLORS.text}  />

          {/* <Text style={{ fontSize: 25, color: COLORS.text}}> Accueil </Text> */}
          <Octicons name="person" size={30} color={ COLORS.text}/>
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 15 }}>
          <Text
            style={{
              fontSize: 40,
              color: COLORS.text,
              fontFamily: "RobotoBold",
            }}
          >
            Salut
          </Text>

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
              fontFamily: "RobotoRegular",
              color: COLORS.text,
            }}
          >
            Besoin d'un endroit où passer ces vaccances? Rejoins-nous
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
            }}
          >
            <Octicons name="search" size={30} color={ COLORS.dark}/>
            <TextInput
              placeholder="Rechercher un lieu"
              style={{ paddingHorizontal: 20, fontSize: 16, color: COLORS.dark }}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginRight: -40, marginTop: 30 }}
          >
            <TouchableOpacity
            //   onPress={() => this.props.navigation.navigate("Detail")}
                onPress={()=>{alert("Cette fonctionnalité n'est pas encore disponible")}}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 66,
                    width: 66,
                    borderRadius: 50,
                    backgroundColor: "#5facdb",
                }}
            >
              <Octicons name="bookmark" size={30} color={ COLORS.text}
                // source={require("../images/p.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{alert("Cette fonctionnalité n'est pas encore disponible")}}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 66,
                    width: 66,
                    borderRadius: 50,
                    backgroundColor: "#ff5c83",
                    marginHorizontal: 22,
                }}
            >
              <SimpleLineIcons name="notebook" color="white" size={32} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{alert("Cette fonctionnalité n'est pas encore disponible")}}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 66,
                    width: 66,
                    borderRadius: 50,
                    backgroundColor: "#ffa06c",
                }}
            >
              <SimpleLineIcons name="plane" color="white" size={32} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{alert("Cette fonctionnalité n'est pas encore disponible")}}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 66,
                    width: 66,
                    borderRadius: 50,
                    backgroundColor: "#bb32fe",
                    marginLeft: 22,
                }}
            >
              <SimpleLineIcons name="options" color={COLORS.text} size={32} />
            </TouchableOpacity>
          </ScrollView>

          <Text
            style={{
              color: COLORS.text,
              fontFamily: "RobotoRegular",
              marginTop: 20,
              fontSize:16,
              fontWeight : "bold"
            }}
          >
            Les plus vsisitées
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -30, marginTop: 30 }}
          >
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 280,
                width: 230,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
                source={require("../images/santorini.jpg")}
                style={{ width: "100%", borderRadius: 10, height: "70%" }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    flexDirection: "row",
                    alignContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      flex: 5,
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Les magnifiques maisons de Santorini en Grèce. Dans cette ville vous trouverez des maisons à couper le souffle.
                  </Text>
                  <SimpleLineIcons style={{flex: 1, alignSelf: "center"}} name="bag" size={25} color="#ff5c83" />
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 280,
                width: 230,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
                source={require("../images/paris.jpg")}
                style={{ width: "100%", borderRadius: 10, height: "70%" }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    flexDirection: "row",
                    alignContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      flex: 5,
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Les magnifiques maisons de Santorini en Grèce. Dans cette ville vous trouverez des maisons à couper le souffle.
                  </Text>
                  <SimpleLineIcons style={{flex: 1, alignSelf: "center"}} name="bag" size={25} color="#bb32fe" />
                </View>
              </View>
            </View>
            
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 280,
                width: 230,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
                source={require("../images/dubai.jpg")}
                style={{ width: "100%", borderRadius: 10, height: "70%" }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    flexDirection: "row",
                    alignContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      flex: 5,
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Les magnifiques maisons de Santorini en Grèce. Dans cette ville vous trouverez des maisons à couper le souffle.
                  </Text>
                  <SimpleLineIcons style={{flex: 1, alignSelf: "center"}} name="bag" size={25} color="#5facdb" />
                </View>
              </View>
            </View>

          </ScrollView>
        </View>
      </ImageBackground>

    )
}

const style = StyleSheet.create({
    container: {

    }
})
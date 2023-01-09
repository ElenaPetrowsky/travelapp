import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { places } from "../config/DATA";
import { getToken } from "../utils/Tokens";
import { useSelector, useDispatch } from "react-redux";
import TrajetList from "../components/TrajetList";
import { loadFavorite } from "../store/Favorite/FavoriteSlice";
import { addCountry } from "../store/Search/SearchSlice";
import LottieView from "lottie-react-native";
import * as Typography from "../config/Typography";

import styled from "styled-components";


export const Favoris = (props) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  const handleDestination = (item) => {
    dispatch(addCountry(item));

    props.navigation.navigate("Details");
  };

  const LoadFavorites = async () => {
    let data = await getToken();

    try {
      let favorite = JSON.parse(data);
      dispatch(loadFavorite(favorite));
    } catch (error) {}
  };

  React.useEffect(() => {
    LoadFavorites();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item?.name}
        renderItem={({ item, index }) => {
          return (
            <TrajetList
              onPress={() => handleDestination(item)}
              available={""}
              key={item?.name}
              image={require("../assets/bus.png")}
              name={item?.name}
              unitprice={"45Km"}
              profile={require("../assets/bus.png")}
              img={require("../assets/bus.png")}
              title={item?.name}
              bg="#E6E8EB"
            />
          );
        }}
        ListEmptyComponent={
          <ViewContainer>
            <LottieView
              style={{ width: 200, height: 200 }}
              source={require("../assets/61372-404-error-not-found.json")}
              autoPlay
              loop
            />
            <Typography.H2>
              Aucune Favoris pour l'instant
            </Typography.H2>
          </ViewContainer>
        }
      />
    </View>
  );
};

const ViewContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;


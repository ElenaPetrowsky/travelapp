import "moment/locale/fr";
import React, { useState, useEffect } from "react";
import {
  Alert,
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {getToken,setToken} from "../utils/Tokens"
import { addFavorite } from '../store/Favorite/FavoriteSlice'
import MapView from 'react-native-maps';

//import components
import * as Button from "../components/Button";
import * as Highlights from "../components/Highlights";
import ImgCarousel from "../components/ImgCarousel";

import { useSelector, useDispatch } from 'react-redux'
//import screens

//import styles and assets
import styled from "styled-components";
import colors from "../config/COLORS";
import * as Typography from "../config/Typography";
import { fetchNewData } from "../api/api";

const DetailsMyPost = ({ navigation, route }) => {

  const opacityValue = new Animated.Value(0);
  const [headerOpacity, setHeaderOpacity] = useState(opacityValue);
  const [images, setImages] = useState([]);
  const [type, settype] = useState("PLANE");
  const types = ["PLANE", "BUS", "BÂTEAU", "VOITURE", "TRAIN"];
  const country = useSelector((state) => state.search.selectedCountry);
  const isAdded = useSelector((state) => state.favorite.favorites.find((item)=>item?.name===country?.name));
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch()
  

  const listing = {
    id: "",
    transportation: type,
    image:
      "https://unsplash.com/photos/Hv9CS6KZayQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjczMTgyMDEx&force=true&w=640,https://unsplash.com/photos/FF8cYM1Fq1I/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NzMxODEwNTk&force=true&w=640",
    information:
      "ihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiuihiugiufguifiu",
    address_depart: "",
    date_depart: "",
    weigth: "34kg",
  };

  const HandlerImages = async () => {
    let data = await fetchNewData(country?.name);

    let temp = [];
    data?.results?.forEach((element) => {
      temp.push(element?.urls?.regular);
    });
    setImages(temp);
  };


  const addFavoriteToDatabase =()=>{
    dispatch(
      addFavorite(country)
      )
    }
    
    useEffect(() => {
      let string = JSON.stringify(favorites)
      setToken(string)
  }, [favorites])
  
  useEffect(() => {
    HandlerImages();
    settype(types[Math.random() * types.length - 1]);
  }, [country]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    if (scrollPosition > 70) {
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(headerOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  };
  const ConfirmDeleted = () =>
    Alert.alert(
      "Confirmer la suppression",
      "Êtes-vous sûr que vous voulez effacer cet article ? il ne sera plus disponible",
      [
        {
          text: "Annuler",

          style: "cancel",
        },
        {
          text: "Confirmer",
          onPress: async () => {
            navigation.navigate({
              name: "",
              params: { post: listing.id },
              merge: true,
            });
          },
        },
      ]
    );

  return (
    <Container>
      <View style={{ zIndex: 100 }}></View>

      <ScrollView
        style={{ flex: 1 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <ImgCarousel images={images} />

        <MainWrapper>
          <CityContainer>
            <Typography.H2>{country?.name}</Typography.H2>

            {listing &&
              [2].map((el, i) => {
                if (listing.transportation === "BUS") {
                  return (
                    <Image
                      key={listing.id}
                      source={require("../assets/bus.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  );
                }
                if (listing.transportation === "PLANE") {
                  return (
                    <Image
                      key={listing.id}
                      source={require("../assets/commercial-plane.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  );
                }
                if (listing.transportation === "BÂTEAU") {
                  return (
                    <Image
                      key={listing.id}
                      source={require("../assets/ferry-boat.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  );
                }
                if (listing.transportation === "VOITURE") {
                  return (
                    <Image
                      key={listing.id}
                      source={require("../assets/hatchback.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  );
                }
                if (listing.transportation === "TRAIN") {
                  return (
                    <Image
                      key={listing.id}
                      source={require("../assets/train-a-grande-vitesse.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  );
                }
              })}
          </CityContainer>

          <HLine />
          <Section>
            <Highlights.TakeOff data={listing} />
            <Highlights.SelfCheckin data={listing} />
            <Highlights.Kg data={listing} />
          </Section>
          <HLine />
          <Section>
            <Typography.P>{listing.information.substring(1, 160)}</Typography.P>
            <Button.BtnTxtUnderline
              label="voir plus"
              color={colors.gray}
              onPress={() => navigation.navigate("Reviews", listing)}
            />
          </Section>
          <HLine />

          <HLine />
        </MainWrapper>

        <Section>
          <MarginContainer>
            {/* <List.UserList
              image={listing.user.profile_image}
              name={listing.user.first_name}
              title={"Ajouté par " + listing.user.first_name}
              secondary={`Ajouté le : ${moment(listing.created_at)
                .locale("fr")
                .format("DD MMMM YYYY")}`}
            /> */}
          </MarginContainer>
        </Section>

        <MapView
    initialRegion={{
      latitude: parseFloat(country?.lat),
      longitude: parseFloat(country?.lng),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    style={{
      width:400,
      height:400
    }}
  />
      </ScrollView>
      <Reserve>
        <BtnContainer>
          <Button.BtnContain
            label={` ${!isAdded ? "Ajouter au favoris" : "Supprimer des favoris"} `}
            color={!isAdded ? colors.darkgray : colors.redaccent}
            onPress={addFavoriteToDatabase}
            // icon={
            //   <IconWrapper>
            //     <Icon name="trash" size={30} />
            //   </IconWrapper>
            // }
          />
        </BtnContainer>
      </Reserve>
    </Container>
  );
};

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

const BtnContainer2 = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MainWrapper2 = styled.View`
  flex: 1;
  padding: 26px;
`;
const Flex2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 10px 0;
`;

const FlyingContainer = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 20px 30px 20px 20px;
`;

const Subheading = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

const Section = styled.View`
  padding: 10px 0;
`;

const CityContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Reserve = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px 16px 14px 0;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightgray};
`;

const BtnContainer = styled.View`
  width: 100%;
`;

const MarginContainer = styled.View`
  margin-left: 20px;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginTop: 15,
  },
});

export default DetailsMyPost;

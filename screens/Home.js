import React, {
  useRef,
  useState
} from "react";
import BottomSheet from "react-native-gesture-bottom-sheet";
import * as Button from "../components/Button";

import {
  Animated,
  Image, Modal, SafeAreaView, ScrollView, FlatList,StatusBar, Text, TouchableOpacity,
  TouchableWithoutFeedback, View
} from "react-native";
import CountryFlag from "react-native-country-flag";
import { TextButton } from "../components";


//Redux
import { useSelector, useDispatch } from 'react-redux'
import { addCountry } from '../store/Search/SearchSlice'

import UseCities from "../hooks/UseCities"


//import components
import { COLORS, dummyData, FONTS, SIZES } from "../Constants";

//import styles and assets
import styled from "styled-components";
import colors from "../config/COLORS";
import * as Typography from "../config/Typography";

//import redux
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/Feather";

const Home = (props) => {

  const dispatch = useDispatch()

  const COUNTRIES_ITEM_SIZE = SIZES.width / 3;
  const PLACES_ITEM_SIZE =
    Platform.OS === "ios" ? SIZES.width / 1.25 : SIZES.width / 1.25;
  const EMPTY_ITEM_SIZE = (SIZES.width - PLACES_ITEM_SIZE) / 2;

  const [search, setSearch] = useState(false);
  const [searchpriseencharge, setSearchpriseencharge] = useState(true);
  const [searchterm, setSearchterm] = useState("Ajouter votre lieux de départ");
  const ref = useRef();
  const [sending, setSending] = useState(true);
  const [searchtermSheet, setSearchtermSheet] = useState(
    "Ajouter une destination"
  );


  const [dot, setdot] = useState("..........");
  const [destination, setdestination] = useState("");
  const [priseencharge, setpriseencharge] = useState("");


  const countryScrollX = useRef(new Animated.Value(0)).current;
  const placesScrollX = useRef(new Animated.Value(0)).current;

  const cities = UseCities(
    searchpriseencharge ? priseencharge : destination,
    setSending
  );

  const handleDestination = (item) => {
    setSearch(false)
    dispatch(
      addCountry(item)
    )
    console.log(props)
    props.navigation.navigate("Details");
    //bottomSheetred.current.show();
  };

  const [countries, setCountries] = useState([
    { id: -1 },
    ...dummyData.countries,
    { id: -2 },
  ]);
  const [places, setPlaces] = useState([
    { id: -1 },
    ...dummyData.countries[0].places,
    { id: -2 },
  ]);

  const [placesScrollPosition, setPlacesScrollPosition] = useState(0);

  const bottomSheetred = useRef();

  const renderItem = ({ item }) => (
    <SearchMain onPress={() => handleDestination(item)}>
      <ContainerText>
        <SearchText>{item.name}</SearchText>
        <FlagCountainer>
          <FlagText>Pays: </FlagText>
          <CountryFlag isoCode={item.country} size={12} />
        </FlagCountainer>
      </ContainerText>
    </SearchMain>
  );

  function renderHeader() {

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            paddingVertical: 10,
            alignItems: "center",
            marginTop:50,
            justifyContent: "space-between",
          }}
        >

          <View style={{ alignItems: "center", justifyContent: "center" }} >
            <Text style={{ color: COLORS.black, ...FONTS.h2 ,fontWeight: "bold"}}>Bienvenue sur TravelMap</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderCountries() {
    return (
      <View>
        <Animated.FlatList
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={COUNTRIES_ITEM_SIZE} //your element width
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate={0}
          data={countries}
          keyExtractor={(item) => `${item.id}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: countryScrollX } } }],
            { useNativeDriver: false }
          )}
          onMomentumScrollEnd={(event) => {
            var position = (
              event.nativeEvent.contentOffset.x / COUNTRIES_ITEM_SIZE
            ).toFixed(0);

            setPlaces([
              { id: -1 },
              ...dummyData.countries[position].places,
              { id: -2 },
            ]);
          }}
          renderItem={({ item, index }) => {
            const opacity = countryScrollX.interpolate({
              inputRange: [
                (index - 2) * COUNTRIES_ITEM_SIZE,
                (index - 1) * COUNTRIES_ITEM_SIZE,
                index * COUNTRIES_ITEM_SIZE,
              ],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const mapSize = countryScrollX.interpolate({
              inputRange: [
                (index - 2) * COUNTRIES_ITEM_SIZE,
                (index - 1) * COUNTRIES_ITEM_SIZE,
                index * COUNTRIES_ITEM_SIZE,
              ],
              outputRange: [25, Platform.OS === "ios" ? 80 : 60, 25],
              extrapolate: "clamp",
            });

            const fontSize = countryScrollX.interpolate({
              inputRange: [
                (index - 2) * COUNTRIES_ITEM_SIZE,
                (index - 1) * COUNTRIES_ITEM_SIZE,
                index * COUNTRIES_ITEM_SIZE,
              ],
              outputRange: [15, 25, 15],
              extrapolate: "clamp",
            });

            if (index == 0 || index == countries.length - 1) {
              return (
                <View
                  style={{
                    width: COUNTRIES_ITEM_SIZE,
                  }}
                />
              );
            } else {
              // return (
              //   <Animated.View
              //     opacity={opacity}
              //     style={{
              //       height: 130,
              //       width: COUNTRIES_ITEM_SIZE,
              //       alignItems: "center",
              //       justifyContent: "center",
              //     }}
              //   >
              //     <Animated.Image
              //       source={item.image}
              //       resizeMode="contain"
              //       style={{
              //         width: mapSize,
              //         height: mapSize,
              //       }}
              //     />
              //     <Animated.Text
              //       style={{
              //         marginTop: 5,
              //         color: COLORS.black,
              //         ...FONTS.h1,
              //         fontSize: fontSize,
              //       }}
              //     >
              //       {item.name}
              //     </Animated.Text>
              //   </Animated.View>
              // );
            }
          }}
        />
      </View>
    );
  }

  function exploreButtonHandler(item) {
    props.setDestinationType(item.name);
    const currentIndex = parseInt(placesScrollPosition, 10) + 1;
    props.navigation.navigate("AddGuest");
  }

  function renderPlaces() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={places}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          alignItems: "center",
        }}
        snapToAlignment="center"
        snapToInterval={
          Platform.OS === "ios" ? PLACES_ITEM_SIZE + 28 : PLACES_ITEM_SIZE
        } //your element width
        scrollEventThrottle={16}
        decelerationRate={0}
        bounces={false}
        onMomentumScrollEnd={(event) => {
          var position = (
            event.nativeEvent.contentOffset.x / PLACES_ITEM_SIZE
          ).toFixed(0);

          setPlacesScrollPosition(position);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: placesScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const opacity = placesScrollX.interpolate({
            inputRange: [
              (index - 2) * PLACES_ITEM_SIZE,
              (index - 1) * PLACES_ITEM_SIZE,
              index * PLACES_ITEM_SIZE,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          let activeHeight = 0;

          if (Platform.OS === "ios") {
            if (SIZES.height > 800) {
              activeHeight = SIZES.height / 2;
            } else {
              activeHeight = SIZES.height / 1.65;
            }
          } else {
            activeHeight = SIZES.height / 1.8;
          }

          const height = placesScrollX.interpolate({
            inputRange: [
              (index - 2) * PLACES_ITEM_SIZE,
              (index - 1) * PLACES_ITEM_SIZE,
              index * PLACES_ITEM_SIZE,
            ],
            outputRange: [
              SIZES.height / 2.25,
              activeHeight,
              SIZES.height / 2.25,
            ],
            extrapolate: "clamp",
          });

          if (index == 0 || index == places.length - 1) {
            return (
              <View
                style={{
                  width: EMPTY_ITEM_SIZE,
                }}
              ></View>
            );
          } else {
            return (
              <Animated.View
                opacity={opacity}
                style={{
                  width: PLACES_ITEM_SIZE,
                  height: height,
                  alignItems: "center",
                  borderRadius: 20,
                  padding: 10,
                  //paddingVertical: SIZES.radius,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                />

                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginHorizontal: SIZES.padding,
                  }}
                >
                  <Text
                    style={{
                      marginBottom: SIZES.radius,
                      color: COLORS.white,
                      ...FONTS.h1,
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      marginBottom: SIZES.padding * 2,
                      textAlign: "center",
                      color: COLORS.white,
                      ...FONTS.body3,
                    }}
                  >
                    {item.description}
                  </Text>

                  <TextButton
                    label="Exploration"
                    customContainerStyle={{
                      position: "absolute",
                      bottom: -20,
                      width: 150,
                    }}
                    onPress={() => exploreButtonHandler(item)}
                  />
                </View>
              </Animated.View>
            );
          }
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        {renderHeader()}

        <ScrollView
          contentContainerStyle={{
            paddingBottom: Platform.OS === "ios" ? 40 : 0,
          }}
        >
          <ActionContainer>
            <ActionContainerItems onPress={() => setSearch(true)}>
              <ImageItem
                source={require("../assets/smartphone.png")}
                resizeMode="cover"
              />
              <View>
                <TextItem>Rechercher</TextItem>
                <TextItem>un lieu</TextItem>
              </View>
            </ActionContainerItems>
            <ActionContainerItems
              onPress={() => {
                props.navigation.navigate("Details");
              }}
            >
              <ImageItem
                source={require("../assets/fast-delivery.png")}
                resizeMode="cover"
              />
              <View>
                <TextItem>Voir les</TextItem>
                <TextItem>favoris</TextItem>
              </View>
              <View>
                
              </View>
            </ActionContainerItems>
          </ActionContainer>
          <View style={{ height: 600 }}>
            {/* Countries */}
            <View>{renderCountries()}</View>

            {/* Places */}
            <View style={{ height: Platform.OS === "ios" ? 500 : 470 }}>
              {renderPlaces()}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Modal visible={search} animationType="slide">
        <Safe>
          <SearchArea>
            <Typography.H>{searchterm}</Typography.H>

            {searchpriseencharge && (
              <SearhInput
                onChangeText={setpriseencharge}
                value={priseencharge}
                placeholder="Entrez le nom de la ville"
              />
            )}

            {!searchpriseencharge && (
              <SearhInput
                onChangeText={setdestination}
                value={destination}
                placeholder="Entrez le nom de la ville"
              />
            )}
          </SearchArea>
          <TouchableOpacity onPress={() => setSearch(false)}>
            <CancelBtn >Annuler la recherche</CancelBtn>
          </TouchableOpacity>

           {!sending && (
            <FlatList
              refreshing={sending}
              data={cities}
              renderItem={renderItem}
              keyExtractor={(item) => item.lat}
              ListEmptyComponent={
                <ViewContainer>
                  <LottieView
                    style={{ width: 200, height: 200 }}
                    source={require("../assets/61372-404-error-not-found.json")}
                    autoPlay
                    loop
                  />
                  <Typography.H2>
                    Aucun résultat
                  </Typography.H2>
                </ViewContainer>
              }
            />
          )} 
          {sending && (
            <ViewContainer>
              <LottieView
                style={{ width: 200, height: 200 }}
                source={require("../assets/62215-delivery-guy.json")}
                autoPlay
                loop
              />
              <Typography.H2>Chargement en cours...</Typography.H2>
            </ViewContainer>
          )}
          <BottomSheet hasDraggableIcon ref={bottomSheetred} height={400}>
            <FlyingContainer>
              <Typography.H color={colors.black}>
                Entrez votre trajet
              </Typography.H>
              <FlyingPlaceContainer>
                <Image
                  style={{ marginRight: 15 }}
                  source={require("../assets/pickup.png")}
                />

                <Typography.H3 color={colors.black}>
                  {priseencharge.length === 0 ? dot : priseencharge}
                </Typography.H3>
                <TouchableWithoutFeedback
                  onPress={() => {
                    ref.current?.clear();
                    setSearchterm("Ajouter votre lieu de prise en charge");
                    setSearchpriseencharge(true);
                    bottomSheetred.current.close();
                  }}
                >
                  <Icon style={{ marginLeft: 15 }} name={"edit-2"} size={18} />
                </TouchableWithoutFeedback>
                {!(priseencharge.length === 0) && (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setpriseencharge("");
                    }}
                  >
                    <Icon style={{ marginLeft: 15 }} name={"trash"} size={18} />
                  </TouchableWithoutFeedback>
                )}
              </FlyingPlaceContainer>
              <FlyingPlaceContainer>
                <Image
                  style={{ marginRight: 15 }}
                  source={require("../assets/distance.png")}
                />
                <Typography.H3 color={colors.black}>
                  {destination.length === 0 ? dot : destination}
                </Typography.H3>
                <TouchableWithoutFeedback
                  onPress={() => {
                    ref.current?.clear();

                    setSearchterm("Ajouter votre lieu de destination");
                    bottomSheetred.current.close();
                    setSearchpriseencharge(false);
                  }}
                >
                  <Icon style={{ marginLeft: 15 }} name={"edit-2"} size={18} />
                </TouchableWithoutFeedback>
                {!(destination.length === 0) && (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setdestination("");
                    }}
                  >
                    <Icon style={{ marginLeft: 15 }} name={"trash"} size={18} />
                  </TouchableWithoutFeedback>
                )}
              </FlyingPlaceContainer>
              <BtnContainer>
                <Button.BtnContain
                  label="Continuer"
                  color={colors.red}
                  onPress={() => {
                    setSearch(false);
                    props.navigation.navigate("AddGuest");
                  }}
                />
              </BtnContainer>
            </FlyingContainer>
          </BottomSheet>
        </Safe>
      </Modal>
    </View>
  );
};

const ActionContainer = styled.View`
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const TextItem = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

const ImageItem = styled.Image`
  height: 45px;
  width: 45px;
  margin-right: 10px;
`;

const ActionContainerItems = styled.TouchableOpacity`
  background-color: #efefef;
  height: 70px;
  flex: 1;
  padding: 10px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
`;

const FlagCountainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
const FlagText = styled.Text`
  font-size: 15px;
  color: gray;
  margin-bottom: 1px;
`;

const SearhInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #d4d4d4;
  padding: 15px 0;
`;

const SearchText = styled.Text`
  font-weight: 500;
  font-size: 15px;
`;

const ContainerText = styled.View``;

const SearchMain = styled.TouchableOpacity`
  padding: 14px 20px;
`;

const FlyingPlaceContainer = styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
`;

const BtnContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FlyingContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const SearchArea = styled.View`
  padding: 20px;
`;

const Safe = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  flex: 1;
`;

const CancelBtn = styled.Text`
  color: ${colors.redaccent};
  text-decoration: underline;
  margin-left: 20px;
`;

const ViewContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

export default Home;

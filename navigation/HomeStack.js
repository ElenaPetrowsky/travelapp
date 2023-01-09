import React from "react";

//import navigation
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import HomeTab from "./HomeTab";
import Details from "../screens/Details";
import Description from "../screens/details/Description";
import Reviews from "../screens/details/Reviews";
import Amenities from "../screens/details/Amenities";

//import screens

//import styles and assets
import styled from "styled-components";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeTab"
      component={HomeTab}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Amenities"
      component={Amenities}
      options={{
        title: "Amenities",
        headerBackTitleVisible: false,

        headerBackImage: () => (
          <IconWrapper>
            <Icon name="chevron-left" size={30} />
          </IconWrapper>
        ),
      }}
    />

    <Stack.Screen
      name="Reviews"
      component={Reviews}
      options={{
        title: "Reviews",
        headerBackTitleVisible: false,

        headerBackImage: () => (
          <IconWrapper>
            <Icon name="chevron-left" size={30} />
          </IconWrapper>
        ),
      }}
    />

    <Stack.Screen
      name="Description"
      component={Description}
      options={{
        title: "Description",
        headerBackTitleVisible: false,

        headerBackImage: () => (
          <IconWrapper>
            <Icon name="chevron-left" size={30} />
          </IconWrapper>
        ),
      }}
    />

    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: "Details",
        headerBackTitleVisible: false,

        headerBackImage: () => (
          <IconWrapper>
            <Icon name="chevron-left" size={30} />
          </IconWrapper>
        ),
      }}
    />
  </Stack.Navigator>
);

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default HomeStack;

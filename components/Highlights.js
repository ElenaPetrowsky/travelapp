import React from "react";
import { View, Image } from "react-native";
import moment from "moment";
import "moment/locale/fr";
//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../config/COLORS";
import * as Typography from "../config/Typography";

export const TakeOff = ({ data }) => {
  return (
    <View>
      <Highlight>
        <Image
          source={require("../assets/departure.png")}
          style={{ width: 40, height: 40 }}
        />
        <HglText>
          <Typography.PBold>Départ</Typography.PBold>
          <Typography.P colors={Colors.gray}>
            Date de départ :{" "}
            {/* {moment(data.date_depart).locale("fr").format("DD MMMM YYYY")} */}
          </Typography.P>
          <Typography.P colors={Colors.gray}>
            Addresse de départ: {data.address_depart}
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const SelfCheckin = ({ data }) => {
  return (
    <View>
      <Highlight>
        <Image
          source={require("../assets/departure.png")}
          style={{ width: 40, height: 40 }}
        />
        <HglText>
          <Typography.PBold>Arrivée</Typography.PBold>
          <Typography.P colors={Colors.gray}>
            Date d'arrivée:{" "}
            {moment(data.date_arrivee).locale("fr").format("DD MMMM YYYY")}
          </Typography.P>
          <Typography.P colors={Colors.gray}>
            Addresse d'arrivée: {data.address_arrive}
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const Clean = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="like" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>Headers</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
            lorem ImageInputListImageInputListImageInputList lorem
            ImageInputListImageInputListImageInputList
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const SuperHost = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="trophy" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>Header</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
            lorem ImageInputListImageInputListImageInputList lorem
            ImageInputListImageInputListImageInputList
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const Location = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="location" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>Headers</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
            lorem ImageInputListImageInputListImageInputList lorem
            ImageInputListImageInputListImageInputList
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};
export const Kg = ({ data }) => {
  return (
    <View>
      <Highlight>
        <Image
          source={require("../assets/kg.png")}
          style={{ width: 40, height: 40 }}
        />
        <HglText>
          <Typography.PBold>Kg disponible</Typography.PBold>
          <Typography.P colors={Colors.gray}>
            Nombre de Kg disponibles: {data.weigth}
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

const Highlight = styled.View`
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
`;

const HglText = styled.View`
  flex-shrink: 1;
  margin-left: 10px;
`;

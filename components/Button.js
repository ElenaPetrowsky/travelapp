import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import { EvilIcons, FontAwesome } from "@expo/vector-icons";

import styled from "styled-components";
import colors from "../config/COLORS";
import * as Typogrpahy from "../config/Typography";
import Icon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

export const BtnContain = ({
  color,
  disabled,
  label,
  onPress,
  icon,
  size,
  sending,
}) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Filled style={color && { backgroundColor: color }}>
          {size === "small" ? (
            <Wrapper>
              {icon && (
                <FontAwesome
                  name={icon}
                  color="white"
                  style={{ marginRight: 8 }}
                />
              )}
              <Typogrpahy.pS color="white" bold={true}>
                {!sending && label}
                {sending && <ActivityIndicator color="white" />}
              </Typogrpahy.pS>
            </Wrapper>
          ) : (
            <Wrapper>
              {icon && (
                <FontAwesome
                  name={icon}
                  color="white"
                  style={{ marginRight: 8 }}
                />
              )}
              <Typogrpahy.Sub1 color="white" bold={true}>
                {!sending && label}
                {sending && <ActivityIndicator color="white" />}
              </Typogrpahy.Sub1>
            </Wrapper>
          )}
        </Filled>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnOutline = ({ color, disabled, label, labelcolor, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Outlined style={{ borderWidth: 2, borderColor: color }}>
          <Label style={{ color: labelcolor }}>{label}</Label>
        </Outlined>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnText = ({ color, label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <LabelWrapper>
          <Label style={{ color }}>{label}</Label>
        </LabelWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnTxtUnderline = ({ color, label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <LabelWrapper>
          <Label
            style={{
              color: color,
              fontSize: 15,
              textDecorationLine: "underline",
            }}
          >
            {label}
          </Label>
        </LabelWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export const FloatingButton = ({ iconName, label, onPress }) => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPress}>
        <FbWrapper elevation={3}>
          <FontAwesome name={iconName} color="white" />
          <Label style={{ color: "white", marginLeft: 6, fontSize: 13 }}>
            {label}
          </Label>
        </FbWrapper>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export const BtnCircle = ({ iconName, size, onPress, sending }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CircleContainer>
        <Circle>
          {!sending && <Icon name={iconName} size={size} color="white" />}
          {sending && <ActivityIndicator color={"white"} size={"large"} />}
        </Circle>
      </CircleContainer>
    </TouchableOpacity>
  );
};

const Container = styled.View`
  width: 100%;
`;

const CircleContainer = styled.View`
  background-color: #463a91;
  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -${height - 400}px;
  right: 0px;
`;

const Filled = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  padding: 14px;
  background-color: ${colors.gray};
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Outlined = styled.View`
  justify-content: center;
  align-items: center;

  border-radius: 26px;
  padding: 14px;
`;

const LabelWrapper = styled.View`
  padding: 10px 0;
`;

const Circle = styled.View`
  border-radius: 500px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-left: 6px;
`;

const Filled2 = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
  border-radius: 8px;
  padding: 14px;
`;

const FbWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  border-radius: 26px;
  padding: 14px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12);
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

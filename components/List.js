import React from "react";
import { View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import UserAvatar from 'react-native-user-avatar';


import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';

import styled from "styled-components";
import * as Typography from "../config/Typography";
import colors from "../config/COLORS";

export const Default = ({ containedicon, icon, secondary, title, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress}>
      <Container>
        {containedicon && (
          <IconContainer>
            <Icon2 name={containedicon} size={18} />

          </IconContainer>
        )}
        <TextContainer>
          <Typography.Sub1 color={colors.black}>{title}</Typography.Sub1>
          {secondary && <Typography.P>{secondary}</Typography.P>}
        </TextContainer>
        {icon && (

          <Icon name={icon}
            size={24}
            style={{ color: colors.gray }} />

        )}
      </Container>
    </TouchableHighlight>
  );
};

export const UserList = ({
  image,
  name,
  meta,
  onPress,
  secondary,
  title,
  RightActions,
}) => {

  console.log(name)
  return (
    <Swipeable renderRightActions={RightActions}>
      <TouchableHighlight underlayColor={colors.faintgray} onPress={onPress}>
        <View>
          <Container>
            <UserAvatar
              size={40}
              style={{ marginRight: 10 }}
              name={name}
              src={image}


            />
            <TextContainer>
              <FirstLine>
                <Typography.Sub1 color={colors.black}>{title}</Typography.Sub1>
                <Typography.SP color={colors.black}>{meta}</Typography.SP>
              </FirstLine>
              {secondary && (
                <Typography.P numberOfLines={1} color={colors.gray}>
                  {secondary}
                </Typography.P>
              )}
            </TextContainer>
          </Container>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const Container = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: ${colors.faintgray};
  border-radius: 8px;
  border: 1px solid ${colors.lightgray};
  margin-right: 15px;
`;

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
`;

const AvatarEmpty = styled.View`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
  background-color: ${colors.lightgray};
`;

const AvatarSmall = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 12px;
  background-color: ${colors.lightgray};
`;

const AvatarSmallEmpty = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 12px;
  background-color: ${colors.lightgray};
`;

const AvatarXsmall = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
  background-color: ${colors.lightgray};
`;

const AvatarXsmallEmpty = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
  background-color: ${colors.lightgray};
`;

const FirstLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

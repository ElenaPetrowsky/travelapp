import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import UserAvatar from 'react-native-user-avatar';

export default class CourseList extends React.Component {
  render() {
    const { img, title, bg, unitprice, available, onPress, name, image, RightActions } = this.props;
    return (
      <Swipeable renderRightActions={RightActions}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: 'row',
            backgroundColor: bg,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image source={img} style={{ width: 40, height: 40 }} />

          <View>
            <Text
              style={{
                color: '#345c74',

                fontSize: 13,
                paddingHorizontal: 20,
                width: 170,
              }}>
              {title}
            </Text>
            <Text
              style={{
                color: '#f58084',

                fontSize: 12,
                paddingHorizontal: 20,
              }}>
              {available}
            </Text>
          </View>
          <Text
            style={{
              color: '#345c74',
              fontWeight: 'bold',
              fontSize: 13,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            {unitprice}
          </Text>

          <UserAvatar
            size={40}
            name={name}
            src={image}

          />

        </TouchableOpacity>
      </Swipeable>
    );
  }
}

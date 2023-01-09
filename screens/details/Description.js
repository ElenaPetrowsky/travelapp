import React, { useState, useRef } from 'react';

import { View, Text, ScrollView,Animated} from "react-native";
import { NavBar2 } from '../../components/NavBar';

//import styles and assets
import styled from "styled-components";
import * as Typography from "../../config/Typography";

const Description = ({ navigation, route }) => {
  const listing = route.params;
    const opacityValue = new Animated.Value(0);
  const [headerOpacity, setHeaderOpacity] = useState(opacityValue);
  const headerStyle = {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    opacity: headerOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    position: 'absolute',
    top: 0,
    left: 0,
  };

  return (
    <Container>

      <ScrollView>
        <Typography.H1>Information de l'envoie</Typography.H1>
        <Spacing />
        <Typography.P>
          {listing.information}
        </Typography.P>


      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const Spacing = styled.View`
  padding: 10px 0;
`;

export default Description;

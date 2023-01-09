import React from 'react';
import { ScrollView, View } from 'react-native';

//import components
import ImageInput from '../components/ImageInput';

//import styles and assets
import styled from 'styled-components';

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
  return (
    <ScrollView horizontal>
      <Container>
        {imageUris.map(uri => (
          <View key={uri} style={{marginRight: 10}}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={uri => onAddImage(uri)} />
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

export default ImageInputList;

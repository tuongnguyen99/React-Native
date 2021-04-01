import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd();
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => {
            return (
              <ImageInput imageUri={uri} onPress={onRemoveImage} key={uri} />
            );
          })}
          <ImageInput onPress={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ImageInputList;

import * as ImagePicker from 'expo-image-picker';
import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';

function ImageInput({ imageUri, onPress }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable to access your photos');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handleSelectImage = async () => {
    if (imageUri) return onPress(imageUri);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onPress(result.uri);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleSelectImage}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} key={imageUri} />
      ) : (
        <Icon name="camera" backgroundColor="transparent" size={80} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;

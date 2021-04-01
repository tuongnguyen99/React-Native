import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default () => {
  const [location, setLocation] = useState();

  const requestPermission = async () => {
    const result = await Location.requestPermissionsAsync();
    if (!result.granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return location;
};

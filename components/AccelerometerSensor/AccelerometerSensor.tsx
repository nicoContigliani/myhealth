// components/AccelerometerSensor.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const AccelerometerSensor: React.FC = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000); // Actualizar cada segundo

    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });

    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer:</Text>
      <Text style={styles.text}>x: {data.x.toFixed(2)}</Text>
      <Text style={styles.text}>y: {data.y.toFixed(2)}</Text>
      <Text style={styles.text}>z: {data.z.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default AccelerometerSensor;

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const StepCounter: React.FC = () => {
  const [steps, setSteps] = useState(0);
  const isWalkingRef = useRef(false);
  const previousMagnitudeRef = useRef(0);
  const stepThreshold = 1.1; // Ajustar el umbral según sea necesario

  useEffect(() => {
    Accelerometer.setUpdateInterval(100); // Actualizar cada 100ms

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const magnitude = Math.sqrt(x * x + y * y + z * z);
      const magnitudeChange = Math.abs(magnitude - previousMagnitudeRef.current);

      // Filtrar el ruido y detectar posibles pasos
      if (magnitudeChange > stepThreshold) {
        isWalkingRef.current = true;
      } else if (isWalkingRef.current && magnitudeChange < 0.5) {
        setSteps(prevSteps => prevSteps + 1);
        isWalkingRef.current = false;
      }

      previousMagnitudeRef.current = magnitude;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Steps: {steps}</Text>
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

export default StepCounter;

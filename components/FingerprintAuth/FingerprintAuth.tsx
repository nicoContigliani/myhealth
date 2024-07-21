import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { fingerPrintAuthSlice } from '@/redux/Auth/Auth';

const FingerprintAuth = () => {
  const dispatch = useAppDispatch();

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const handleBiometricAuth = async () => {
    try {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
        return Alert.alert(
          'Biometría no configurada',
          'Por favor, configura tu biometría en los ajustes de tu dispositivo.',
        );
      }

      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Autenticación Biométrica',
        fallbackLabel: 'Usar contraseña',
      });

      if (biometricAuth.success) {
        console.log("🚀 ~ handleBiometricAuth ~ biometricAuth:", biometricAuth)
        Alert.alert('Autenticado', '¡Autenticación exitosa!');
        try {
          dispatch(fingerPrintAuthSlice(biometricAuth.success))

        } catch (error) {
          console.log("🚀 ~ handleBiometricAuth ~ error:", error)
        }
      } else {
        Alert.alert('Autenticación fallida', 'Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        {isBiometricSupported
          ? 'Tu dispositivo soporta autenticación biométrica.'
          : 'Tu dispositivo no soporta autenticación biométrica.'}
      </Text>
      <Button
        title="Autenticarse con huella dactilar"
        onPress={handleBiometricAuth}
        disabled={!isBiometricSupported}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default FingerprintAuth;


//<FingerprintAuth/>
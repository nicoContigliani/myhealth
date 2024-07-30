import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { fingerPrintAuthSlice } from '@/redux/Auth/Auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importar el ícono de huella dactilar

const FingerprintAuth = () => {
  const dispatch = useAppDispatch();
  const opacity = useRef(new Animated.Value(1)).current;

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1050,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);







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
        // console.log("🚀 ~ handleBiometricAuth ~ biometricAuth:", biometricAuth)
        // Alert.alert('Autenticado', '¡Autenticación exitosa!');
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
      {/* <Text>
        {isBiometricSupported
          ? 'Tu dispositivo soporta autenticación biométrica.'
          : 'Tu dispositivo no soporta autenticación biométrica.'}
      </Text> */}
      {/* <Button
        title="Autenticarse con huella dactilar"
        onPress={handleBiometricAuth}
        disabled={!isBiometricSupported}
      /> */}
      <Animated.View style={{ opacity }}>
        <TouchableOpacity
          style={styles.biometricButton}
          onPress={handleBiometricAuth}
          disabled={!isBiometricSupported}
        >
          <Icon name="fingerprint" size={45} color="grey" />
        </TouchableOpacity>
        <Text style={styles.texts}>
          finger print
        </Text>
      </Animated.View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: 'rgba(131, 131, 131, 0.451)', // Color del borde con transparencia
  },
  biometricButton: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 38,
    color:'grey'


  },
  biometricButtonText: {
    // marginLeft: 10,
    fontSize: 16,
    color: '#007aff',
  },
  texts: {
    fontSize: 16,
  }
});

export default FingerprintAuth;


//<FingerprintAuth/>
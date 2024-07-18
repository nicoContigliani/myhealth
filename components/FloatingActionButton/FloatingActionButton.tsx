import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome6, Fontisto } from '@expo/vector-icons'; // Importar los íconos de Ant Design desde Expo

const FloatingButton = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      {/* Botón principal */}
      <TouchableOpacity style={styles.mainButton} onPress={toggleExpand}>
        <AntDesign name={expanded ? 'close' : 'plus'} size={24} color="white" />
      </TouchableOpacity>
      
      {/* Botones secundarios */}
      {expanded && (
        <View style={styles.secondaryButtons}>
          <TouchableOpacity style={styles.secondaryButton}>
            {/* <Text style={styles.buttonText}>Button 1</Text> */}
            <FontAwesome6 name="users-between-lines" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            {/* <Text style={styles.buttonText}>Button 2</Text> */}
            <Fontisto name="user-secret" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Button 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Button 4</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 25,
    

  },
  mainButton: {
    backgroundColor: 'blue',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    
  },
  secondaryButtons: {
    position: 'absolute',
    bottom: 72,
    right: -5,
    alignItems: 'center',
    backgroundColor: 'transparent', // Fondo transparente
    padding: 10,
    borderRadius: 20, // Radio de borde en valor numérico entero
    borderWidth: 1, // Ancho del borde
    borderColor: 'rgba(0, 0, 0, 0.3)', // Color del borde con transparencia
    borderBottomWidth: 4,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)', // Color del borde inferior con transparencia
  },
  secondaryButton: {
    backgroundColor: 'blue',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default FloatingButton;



//<FloatingActionButton />

import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle; // Haciendo opcional el estilo
}


const Card = (props: any) => {
    const { children, style } = props
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 8,
    },
});

export default Card;


{/* <Card style={styles.customCard}>
    <Text>Ejemplo de contenido dentro de la tarjeta.</Text>
</Card> */}

// const styles = StyleSheet.create({
//     customCard: {
//         width: '80%',
//         alignSelf: 'center',
//         marginTop: 20,
//     },
// });
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import message, { setMessage } from '../../redux/messages/message';


const Message = () => {
    const dispatch = useDispatch();
    const messages = useAppSelector(setMessage);
    console.log("🚀 ~ file: Message.tsx:11 ~ Message ~ messages", messages)



    const handlePress = () => {
        dispatch(setMessage('Message from Component'));
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>{message}</Text> */}
            <Button title={'Set Message'} onPress={handlePress} />
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
});
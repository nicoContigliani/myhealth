import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const RadioButton = (props: any) => {
    const {radioButtons } = props
    const [selectedId, setSelectedId] = useState<string | undefined>();

    // const radioButtons = useMemo(() => ([
    //     {
    //         id: '1',
    //         label: 'Option 1',
    //         value: 'option1',
    //         labelStyle: styles.label,
    //         containerStyle: styles.radioButtonContainer,
    //     },
    //     {
    //         id: '2',
    //         label: 'Option 2',
    //         value: 'option2',
    //         labelStyle: styles.label,
    //         containerStyle: styles.radioButtonContainer,
    //     }
    // ]), []);

    return (
        <View style={styles.container}>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                containerStyle={styles.radioGroupContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f0f0f0',
    },
    radioGroupContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    radioButtonContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});

export default RadioButton;

// const radioButtons = useMemo(() => ([
//     {
//         id: '1',
//         label: 'Option 1',
//         value: 'option1',
//         labelStyle: styles.label,
//         containerStyle: styles.radioButtonContainer,
//     },
//     {
//         id: '2',
//         label: 'Option 2',
//         value: 'option2',
//         labelStyle: styles.label,
//         containerStyle: styles.radioButtonContainer,
//     }
// ]), []);


{/* <RadioButton 
radioButtons={radioButtons}
/> */}

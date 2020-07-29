import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

const MyButton = props => {

    return (
        <TouchableOpacity style={{
            ...styles.button,
            width: 150,
            padding: 7,
        }} onPress={props.onPress}>
            <Text style={{
                ...styles.text,
                fontSize: 18,
            }}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.accentColor,
        marginVertical: 10,
        borderRadius: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
});

export default MyButton;
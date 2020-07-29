import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const DefaultText = props => {
    return (
        <Text
            style={{
                ...styles.text,
                fontSize: 14,
            }}
        >
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'noto',
        textAlign: 'center',
        marginHorizontal: 10,
        color: Colors.primaryColor
    }
});

export default DefaultText;
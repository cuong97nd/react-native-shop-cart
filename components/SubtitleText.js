import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

const SubtitleText = props => {
    return (
        <Text
            style={{
                ...styles.text,
                fontSize: 22,
            }}
        >
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'inconsolata',
        textAlign: 'center',
        marginHorizontal: 10,
        color: Colors.primaryColor
    }
});

export default SubtitleText;
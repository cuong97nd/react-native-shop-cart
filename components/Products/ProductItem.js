import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import SubtitleText from '../SubtitleText';
import DefaultText from '../DefaultText';
import MyButton from '../MyButton';

const ProductItem = props => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={{
            ...styles.shopItem,
            width: 300,
        }}>
            <TouchableCmp
                onPress={props.onSelectedItem}
            >
                <View>
                    <View style={{
                        ...styles.itemRow,
                        height: '80%',
                    }}>
                        <Image
                            source={{ uri: props.imageUrl }}
                            style={styles.bgImage}
                        >
                        </Image>
                    </View>
                    <View style={{
                        ...styles.itemColumn,
                        ...styles.itemDetail
                    }}>
                        <SubtitleText
                            numberOfLines={1}
                        >
                            {props.title}
                        </SubtitleText>
                        <DefaultText>{props.price}¥</DefaultText>
                    </View>

                </View>
            </TouchableCmp>
        </View>
    )
};

const styles = StyleSheet.create({
    shopItem: {
        height: 500,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    bgImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        justifyContent: "center"
    },
    itemRow: {
        flexDirection: 'row',
    },
    itemColumn: {
        flexDirection: 'column',
    },
    itemDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '18%',
        paddingTop: 10,
    },
    itemButtons: {
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default ProductItem;
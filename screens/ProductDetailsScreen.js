import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Text,
    StyleSheet,
    ScrollView,
    Image,
    View
} from 'react-native';


import MyButton from '../components/MyButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

import { addToCart } from '../store/actions/cart'

const ProductDetailsScreen = ({ route, navigation }) => {
    const availableProducts = useSelector(state => state.products);
    const productId = JSON.parse(JSON.stringify(route.params.id));

    const selectedProduct = availableProducts.find(product => product._id === productId);


    const dispatch = useDispatch();
    const addToCartHandler = (selectedProduct) => {
        dispatch(addToCart(selectedProduct))
    };

    return (
        <ScrollView style={styles.screen}>
            <Image source={{ uri: selectedProduct.photo }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.price}>{selectedProduct.price}¥</Text>
                <DefaultText>{selectedProduct.name}</DefaultText>
                <View style={styles.buttonContainer}>
                    <MyButton
                        onPress={
                            () => {
                                addToCartHandler(selectedProduct);
                                navigation.navigate(
                                    'Cart'
                                );
                            }
                        }
                    >
                        カードに入れる
                    </MyButton>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: "contain",
        justifyContent: "center",
    },
    infoContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.accentColor,
        marginTop: 20,
    },
    buttonContainer: {
    }
});

export default ProductDetailsScreen;
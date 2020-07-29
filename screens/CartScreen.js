import React, { useState } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    FlatList,
    Modal,
    TouchableHighlight

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import MyButton from '../components/MyButton';
import DefaultText from '../components/DefaultText';
import CartItem from '../components/CartItem';

import { removeWholeItem, order } from '../store/actions/cart'



const CartScreen = props => {

    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const cartItems = useSelector(state => state.cart);
    const user = useSelector(state => state.user);

    const totalPrice = cartItems.reduce(
        (accum, product) => accum + product.price * product.quantity,
        0
    );


    if (cartItems.length === 0 || !cartItems) {
        return (
            <View style={styles.contentVoidCart}>
                <DefaultText>Your cart is empty</DefaultText>
            </View>
        )
    }
    const handleOrderButton = () => {
    }

    const removeFromCartHandler = (item) => {
        dispatch(removeWholeItem(item))
    }

    const renderCartItem = itemData => {
        return (
            <CartItem
                id={itemData.item._id}
                item={itemData.item.name}
                price={itemData.item.price}
                qty={itemData.item.quantity}
                onClickOnTrash={
                    () => {
                        removeFromCartHandler(itemData.item);
                    }
                }
            />
        );
    };

    return (
        <>
            <ScrollView>
                <View style={styles.contentFullCart}>
                    <View style={styles.cartHeader}>
                        <DefaultText>合計　:　<Text style={styles.amount}>{totalPrice}¥</Text></DefaultText>
                        <MyButton
                            onPress={() => {
                                setModalVisible(true)
                            }}
                        >
                            確認
                    </MyButton>
                    </View>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item, index) => item.id}
                        renderItem={renderCartItem}
                        style={{ width: '100%' }}
                    />
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>ご注文よろしいですか？</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#95BF74" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                dispatch(order(user.sub, cartItems, user.token))

                            }}
                        >
                            <Text style={styles.textStyle}>注文</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

        </>
    );
};

const styles = StyleSheet.create({
    contentVoidCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentFullCart: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 15,
    },
    cartHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    amount: {
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width: 60
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default CartScreen;
import React from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Order from '../components/Orders/Order';
import DefaultText from '../components/DefaultText';

import { getOrder } from '../store/actions/order'
const totalPrice = cart => {
    return cart.reduce(
        (accum, product) => accum + product.price * product.quantity,
        0
    );
};

const OrdersScreen = props => {
    const orders = useSelector(state => state.order);
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();
    dispatch(getOrder(token))

    if (orders.length === 0 || !orders) {
        return (
            <View style={styles.contentVoidOrders}>
                <DefaultText>You don't have any orders.</DefaultText>
            </View>
        )
    }

    return (
        <FlatList
            data={orders}
            keyExtractor={(item, index) => item._id}
            renderItem={itemData => (
                <Order
                    id={itemData.item._id}
                    sum={totalPrice(itemData.item.cart)}
                    date={itemData.item.orderTime}
                    content={itemData.item.cart}
                    isOrderExpanded={itemData.item.status}
                />
            )}
            style={{ width: '100%' }}
        />
    );
};

const styles = StyleSheet.create({
    contentVoidOrders: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default OrdersScreen;
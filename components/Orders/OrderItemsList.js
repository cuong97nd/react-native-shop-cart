import React from 'react';
import { View, FlatList } from 'react-native';

import OrderItem from './OrderItem';

const OrderList = props => {

    const renderOrderItem = itemData => {
        return (
            <OrderItem
                id={itemData.item.id}
                title={itemData.item.name}
                price={itemData.item.price}
                qty={itemData.item.quantity}
            />
        );
    };

    return (
        <View>
            <FlatList
                data={props.order}
                keyExtractor={(item, index) => item._id}
                renderItem={renderOrderItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

export default OrderList;
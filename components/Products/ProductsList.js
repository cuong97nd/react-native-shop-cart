import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';



import ProductItem from './ProductItem';

const ProductsList = props => {


    let numColumns = 1;

    const addToCartHandler = (productId) => {
    };

    const editHandler = (productTitle, productDescription, productImageUrl, productId) => {
    };

    const deleteHandler = (productId) => {
    };

    const renderProductItem = ({ item }) => {

        return (
            <>
                <ProductItem
                    id={item._id}
                    title={item.name}
                    description={item.name}
                    price={item.price}
                    imageUrl={item.photo}
                    screen={props.screen}
                    onSelectedItem={
                        () => {
                            props.navigation.navigate(
                                'ProductDetails',
                                { id: item._id }
                            );
                        }
                    }

                />
            </>
        );
    };
    return (
        <View style={styles.list}>
            <FlatList
                key={numColumns}
                data={props.listData}
                keyExtractor={(item, index) => item._id}
                renderItem={renderProductItem}
                contentContainerStyle={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                screen={props.screen}
                numColumns={numColumns}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
    }
});

export default ProductsList;

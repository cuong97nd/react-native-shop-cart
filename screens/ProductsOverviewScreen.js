import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductsList from '../components/Products/ProductsList';
import { Text } from 'react-native'
import { fetchProducts } from '../store/actions/products'



const ProductsOverviewScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const availableProducts = useSelector(state => state.products);
    dispatch(fetchProducts());


    return (
        <>
            <ProductsList
                listData={availableProducts}
                navigation={navigation}
                screen="Products"
            />
        </>
    );
};

export default ProductsOverviewScreen;
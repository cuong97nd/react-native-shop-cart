import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions, Text } from 'react-native';
import CartScreen from '../screens/CartScreen'


import ShopNavigator from '../navigation/ShopNavigator';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import OrdersScreen from '../screens/OrdersScreen'

const AppContainer = props => {


    return (

        <ShopNavigator />
    );
};

export default AppContainer;
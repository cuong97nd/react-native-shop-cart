import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import Profile from '../screens/Profile'

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';

import { createNewObject, addProduct, editProduct } from '../store/actions/products';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        height: Platform.OS === 'android' ? 100 : 70,
    },
    headerTitleStyle: {
        fontFamily: 'noto-b',
        fontSize: 20,
    },
    headerBackTitleStyle: {
        fontFamily: 'noto'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const ShopNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="ProductsOverview"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen
                name="ProductsOverview"
                component={ProductsOverviewScreen}
                options={(navData) => ({
                    title: 'ショップ',
                    headerRight: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title="Cart"
                                iconName="ios-cart"
                                onPress={() => {
                                    navData.navigation.navigate('Cart')
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={() => ({
                    title: '商品情報'
                })}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={() => ({
                    title: 'カード'
                })}
            />
        </Stack.Navigator>
    );
};



const ProfileNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={(navData) => ({
                    title: 'アカウント',

                    headerLeft: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
            />

        </Stack.Navigator>
    );
};




const OrdersNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={defaultStackNavOptions}

        >
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={({ route }) => ({
                    title: '注文履歴',
                    headerLeft: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
            />
        </Stack.Navigator>
    );
};


const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: Colors.accentColor,
                    labelStyle: {
                        fontFamily: 'noto'
                    }
                }}>
                <Drawer.Screen
                    name="アカウント"
                    component={ProfileNavigator}
                    options={{
                        drawerIcon: drawerConfig => (
                            <MaterialCommunityIcons name="face-profile" size={23} color={drawerConfig.color} />

                        )
                    }}
                />
                <Drawer.Screen
                    name="ショップ"
                    component={ShopNavigator}
                    options={{
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                                size={23}
                                color={drawerConfig.color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="注文履歴"
                    component={OrdersNavigator}
                    options={{
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                                size={23}
                                color={drawerConfig.color}
                            />
                        )
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
import React from 'react';
import { Text, StyleSheet, Button, View, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';


import ProductsList from '../components/Products/ProductsList';
import MyButton from '../components/MyButton'

import { getUser, logout } from '../store/actions/user'

import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';



function LoginGoogle() {
    return (
        <View style={styles.container}>
            <View style={{
                alignSelf: "center"

            }}><AntDesign name="google" size={30} color="black" /></View>
            <View style={{
                alignSelf: "center"

            }}><MyButton >ロンイン</MyButton></View>
        </View >

    )
}


const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    dispatch(getUser(user.token));

    if (!user) { return (<LoginGoogle />) }
    return (
        <View style={styles.container}>
            <Image
                style={{
                    resizeMode: "contain",
                    height: 150,
                    width: 150,
                    borderRadius: "75",
                    alignSelf: "center"


                }}
                source={{ uri: user.picture }}
            />
            <Text style={{
                fontSize: 30,
                alignSelf: "center"


            }}>{user.name}</Text>
            <View style={{
                alignSelf: "center"
            }} >
                <MyButton
                //  onPress={() => { dispatch(logout()) }}
                > ログアウト</MyButton>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
        justifyContent: "center"

    }
});
export default Profile;
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation'

import AddressHeader from '../../components/Header/AddressHeader';
import SearchBar from './SearchBar';
import CategoryGrid from './CategoryGrid';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { reset2SignIn } from '../../components/navigationResetActions';
import useAuth from '../../hooks/useAuth'
const { BoxShadow } = require('react-native-shadow')

const HomeScreen = () => {
    const navigation = useNavigation()
    const { type } = useAuth()

    useEffect(() => {
        //로그인체크
        if (type == null) {
            navigation.dispatch(reset2SignIn)
            return;
        }
        setTimeout(() => {
            SplashScreen.hide()
        }, 500);

    }, [])

    return (
        <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            <AddressHeader />
            <CategoryGrid />
            <SearchBar />
            <View style={{ height: 20 }} />
        </ScrollView>
    )
}


export default HomeScreen
export { default as CategoryDetailScreen } from './CategoryDetailScreen'
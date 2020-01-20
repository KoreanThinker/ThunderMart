import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation'

import AddressHeader from '../../components/Header/AddressHeader';
import SearchBar from './SearchBar';
import CategoryGrid from './CategoryGrid';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { WIDTH, shadow, cardHeight, shadowOpt, titleFont, middleFont } from '../../components/style';
const { BoxShadow } = require('react-native-shadow')

const HomeScreen = () => {

    return (
        <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            <AddressHeader />
            <CategoryGrid />
            <SearchBar />
        </ScrollView>
    )
}


export default HomeScreen
export { default as CategoryDetailScreen } from './CategoryDetailScreen'
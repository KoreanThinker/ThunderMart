import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import useNavigation from '../../hooks/useNavigation'

import AddressBanner from './AddressBanner';
import SearchBar from './SearchBar';
import CategoryGrid from './CategoryGrid';
import { ScrollView } from 'react-native-gesture-handler';


const HomeScreen = () => {

    return (
        <ScrollView
            overScrollMode='never'

            style={{ flex: 1, backgroundColor: 'white' }}
        >
            <AddressBanner />
            <SearchBar />
            <CategoryGrid />
        </ScrollView>
    )
}


export default HomeScreen
export { default as CategoryDetailScreen } from './CategoryDetailScreen'
export { default as ItemSearchScreen } from './ItemSearchScreen'
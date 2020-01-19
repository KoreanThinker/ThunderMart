import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import useNavigation from '../../hooks/useNavigation'

import AddressBanner from './AddressBanner';
import SearchBar from './SearchBar';
import CategoryGrid from './CategoryGrid';
import { ScrollView } from 'react-native-gesture-handler';
import { WIDTH, shadow } from '../../components/style';


const HomeScreen = () => {

    return (
        <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            <AddressBanner />
            <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 50, elevation: 30, backgroundColor: 'white', margin: 10, borderRadius: 16, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }} >부산 해운대 GS25 1호점</Text>
            </View>

            <View style={{ width: WIDTH - 40, alignSelf: 'center', height: 400, marginTop: -40, borderColor: '#dbdbdb', borderRadius: 16, borderWidth: 1 }}>

            </View>
            {/* <SearchBar /> */}
            {/* <CategoryGrid /> */}
        </ScrollView>
    )
}


export default HomeScreen
export { default as CategoryDetailScreen } from './CategoryDetailScreen'
export { default as ItemSearchScreen } from './ItemSearchScreen'
import React from 'react'
import { View, Text } from 'react-native'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import Postcode from '../../../components/Postcode'
import { NavigationScreenProp, NavigationState, } from 'react-navigation';

interface NavigationParams {
    setBasicAddress: Function
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;


const SearchAddressScreen = () => {
    const navigation = useNavigation<NavigationParams>()

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <LeftArrowHeader goBack={() => navigation.goBack()} title='주소검색' />
            <Postcode
                style={{ flex: 1 }}
                jsOptions={{ animated: true }}
                onSelected={(data: any) => {
                    try {
                        navigation.state.params.setBasicAddress(data.address)
                        navigation.goBack()
                    } catch (error) {
                        navigation.goBack()
                    }
                }}
            />
        </View>
    )
}


export default SearchAddressScreen

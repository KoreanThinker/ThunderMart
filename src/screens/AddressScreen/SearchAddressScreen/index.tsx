import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import Postcode from '../../../components/Postcode'

interface NavigationParams {
    setBasicAddress: Function,
    setContractionAddress: Function,
}


const SearchAddressScreen = () => {
    const navigation = useNavigation<NavigationParams>()
    const [loading, setLoading] = useState(true)

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <LeftArrowHeader goBack={() => navigation.goBack()} title='주소검색' />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <Postcode
                    style={{ flex: 1 }}
                    jsOptions={{ animated: true }}
                    onLoad={() => setLoading(false)}
                    onSelected={(data: any) => {
                        try {
                            navigation.state.params?.setBasicAddress(data.address)
                            navigation.state.params?.setContractionAddress(data.bname !== '' ? data.bname : data.address)
                            navigation.goBack()
                        } catch (error) {
                            navigation.goBack()
                        }
                    }}
                />

                {loading && <ActivityIndicator style={{ position: 'absolute', alignSelf: 'center' }} />}
            </View>
        </View>
    )
}


export default SearchAddressScreen

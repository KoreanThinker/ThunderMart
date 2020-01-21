import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../../hooks/useNavigation'
import WebView from 'react-native-webview'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'

type NavigationParams = {
    name: string,
    url: string
}

const PolicyDetailScreen = () => {
    const navigation = useNavigation<NavigationParams>()
    const uri = navigation.state.params?.url === undefined ? '' : navigation.state.params?.url
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title={navigation.state.params?.name} />
            <WebView
                style={{ flex: 1 }}
                source={{ uri: uri }}
            />
        </View>
    )
}

export default PolicyDetailScreen

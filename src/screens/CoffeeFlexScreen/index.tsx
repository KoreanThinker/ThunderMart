import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import WebView from 'react-native-webview'
import DefaultHeader from '../../components/Header/DefaultHeader'
import LeftArrowHeader from '../../components/Header/LeftArrowHeader'

const uri = 'https://thundermart.app/coffeeflex'

const CoffeFlexScreen = () => {

    const [loading, setLoading] = useState(true)

    return (
        <View style={{ flex: 1 }} >
            <LeftArrowHeader title='커피플렉스' />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <WebView
                    source={{ uri }}
                    style={{ flex: 1 }}
                    onLoad={() => setLoading(false)}
                />
                {loading && <ActivityIndicator style={{ position: 'absolute', alignSelf: 'center', }} />}
            </View>
        </View>
    )
}

export default CoffeFlexScreen

import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { alignCenter } from '../style'

const DefaultActivityIndicator: React.FC = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', ...alignCenter }} >
            <ActivityIndicator color='#000' size='small' />
        </View>
    )
}

export default DefaultActivityIndicator

import React from 'react'
import { View, Text, ViewProps } from 'react-native'
import { headerHeight, color1 } from '../style'

const DefaultHeader: React.FC<ViewProps> = (props) => {
    return (
        <View
            style={{ width: '100%', height: headerHeight, backgroundColor: color1 }}
            {...props}
        />
    )
}

export default DefaultHeader

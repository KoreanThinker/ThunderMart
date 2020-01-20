import React from 'react'
import { View, Text } from 'react-native'
import { color1, headerHeight, titleFont } from '../style'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useNavigation from '../../hooks/useNavigation'

type LeftArrowHeaderProps = {
    title?: string,
    goBack: Function
}

const LeftArrowHeader: React.FunctionComponent<LeftArrowHeaderProps> = ({ title, goBack }) => {
    const navigation = useNavigation()
    return (
        <View style={{ width: '100%', height: headerHeight, alignItems: 'center', justifyContent: 'center', backgroundColor: color1 }}>
            <View style={{ position: 'absolute', left: 0, width: 50, alignItems: 'center' }}>
                <TouchableWithoutFeedback
                    onPress={() => goBack()}
                >
                    <Icon name='arrowleft' size={24} color='white' />
                </TouchableWithoutFeedback>
            </View>

            <Text style={{ ...titleFont, color: 'white' }}>{title}</Text>
        </View>
    )
}

export default LeftArrowHeader

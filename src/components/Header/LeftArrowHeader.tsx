import React from 'react'
import { View, Text } from 'react-native'
import { color1 } from '../style'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useNavigation from '../../hooks/useNavigation'

type LeftArrowHeaderProps = {
    title: string,
    goBack: Function
}

const LeftArrowHeader: React.FunctionComponent<LeftArrowHeaderProps> = ({ title, goBack }) => {
    const navigation = useNavigation()
    return (
        <View style={{ width: '100%', height: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: color1 }}>
            <View style={{ position: 'absolute', left: 20 }}>
                <TouchableWithoutFeedback
                    onPress={() => goBack()}
                >
                    <Icon name='arrowleft' size={32} color='white' />
                </TouchableWithoutFeedback>
            </View>

            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{title}</Text>
        </View>
    )
}

export default LeftArrowHeader

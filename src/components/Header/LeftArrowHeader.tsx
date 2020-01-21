import React from 'react'
import { View, Text } from 'react-native'
import { color1, headerHeight, titleFont } from '../style'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useNavigation from '../../hooks/useNavigation'
import LinearGradient from 'react-native-linear-gradient';

type LeftArrowHeaderProps = {
    title?: string,
    goBack?: Function
}

const LeftArrowHeader: React.FunctionComponent<LeftArrowHeaderProps> = ({ title, goBack }) => {
    const navigation = useNavigation()
    return (
        <>
            <View style={{ width: '100%', height: headerHeight, alignItems: 'center', justifyContent: 'center', backgroundColor: color1 }}>
                <View style={{ position: 'absolute', left: 0, width: 50, alignItems: 'center' }}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            if (goBack) goBack()
                            else navigation.goBack()
                        }}
                    >
                        <Icon name='arrowleft' size={24} color='#fff' />
                    </TouchableWithoutFeedback>
                </View>

                <Text style={{ ...titleFont, color: '#fff' }}>{title}</Text>
            </View>
            {/* <LinearGradient colors={['#F28811', '#FFF000']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: '100%', height: 1.5 }} /> */}
        </>
    )
}

export default LeftArrowHeader

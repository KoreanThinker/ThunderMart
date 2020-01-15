import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { shadow, defaultFont, WIDTH } from '../../components/style'
import LeftArrowHeader from '../../components/Header/LeftArrowHeader'
import useNavigation from '../../hooks/useNavigation'
import useAddress from '../../hooks/useAddress'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddressScreen = () => {
    const navigation = useNavigation()

    const { recentAddresses, onRemove, presentAddress } = useAddress()
    console.log(recentAddresses);
    console.log(presentAddress);

    const RenderItem = (text: string, id: number) =>
        <TouchableWithoutFeedback key={id} style={{ width: '100%', minHeight: 80, backgroundColor: 'white', ...shadow, alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexDirection: 'row', paddingLeft: 16, paddingVertical: 4 }}>
            <Text style={{ ...defaultFont, width: WIDTH - 76 }} >{text}</Text>
            <TouchableWithoutFeedback
                onPress={() => onRemove(id)}
                style={{ alignItems: 'center', justifyContent: 'center', height: 80, width: 60 }}
            >
                <Icon name='close' size={24} />
            </TouchableWithoutFeedback>
        </TouchableWithoutFeedback>

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title='배송지' goBack={() => navigation.navigate('MainBottomTab')} />
            <ScrollView style={{ flex: 1 }}>
                {recentAddresses.map((info) => RenderItem(info.text, info.id))}
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('AppendAddressScreen')}
                    style={{ width: '100%', height: 80, backgroundColor: 'white', ...shadow, alignItems: 'center', justifyContent: 'center', marginBottom: 60 }}
                >
                    <Text style={defaultFont} >주소 추가하기</Text>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

export default AddressScreen
export { default as AppendAddressScreen } from './AppendAddressScreen'
export { default as SearchAddressScreen } from './SearchAddressScreen'
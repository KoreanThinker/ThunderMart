import React, { useEffect } from 'react'
import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import { shadow, defaultFont, WIDTH, cardHeight, borderBottom, alignCenter, titleFont } from '../../components/style'
import LeftArrowHeader from '../../components/Header/LeftArrowHeader'
import useNavigation from '../../hooks/useNavigation'
import useAddress from '../../hooks/useAddress'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useShop from '../../hooks/useShop'

const AddressScreen = () => {
    const navigation = useNavigation()

    const { recentAddresses, onRemove, presentAddress, onChange } = useAddress()
    const shop = useShop()
    console.log(recentAddresses);
    console.log(presentAddress);

    useEffect(() => {
        // if (recentAddresses.length == 0) navigation.navigate('AppendAddressScreen')
    }, [])

    const onChangeAddress = (id: number) => {
        onChange(id)
        navigation.navigate('MainBottomTab')
        shop.onChange(null)
        ToastAndroid.show('배송지가 변경되었습니다', ToastAndroid.SHORT)
    }

    const RenderItem = (text: string, id: number) =>
        <TouchableWithoutFeedback
            onPress={() => onChangeAddress(id)}
            key={id}
            style={{ width: '100%', minHeight: cardHeight, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 16, paddingVertical: 4, ...borderBottom }}
        >
            <Text style={{ ...defaultFont, width: WIDTH - 76 }} >{text}</Text>
            <TouchableWithoutFeedback
                onPress={() => onRemove(id)}
                style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }}
            >
                <Icon name='close' size={20} />
            </TouchableWithoutFeedback>
        </TouchableWithoutFeedback>

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title='배송지' goBack={() => navigation.navigate('MainBottomTab')} />
            <ScrollView style={{ flex: 1 }}>
                {presentAddress
                    ?
                    <>
                        <Text style={{ ...titleFont, marginLeft: 16, marginTop: 20 }} >현재주소</Text>
                        <View
                            style={{ width: '100%', minHeight: 60, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 16, paddingVertical: 4, ...borderBottom }}
                        >
                            <Text style={{ ...defaultFont, width: WIDTH - 76 }} >{presentAddress.fullAddress}</Text>
                            <TouchableWithoutFeedback
                                onPress={() => onRemove(presentAddress.id)}
                                style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }}
                            >
                                <Icon name='close' size={20} />
                            </TouchableWithoutFeedback>
                        </View>

                        {recentAddresses.length !== 1 && <Text style={{ ...titleFont, marginLeft: 16, marginTop: 20 }} >최근주소</Text>}
                        {recentAddresses.map((info) => info.id !== presentAddress.id && RenderItem(info.fullAddress, info.id))}
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('AppendAddressScreen')}
                            style={{ width: '100%', height: cardHeight, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={defaultFont} >주소 변경하기</Text>
                        </TouchableWithoutFeedback>
                    </>
                    :
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('AppendAddressScreen')}
                        style={{ ...alignCenter, ...borderBottom, width: '100%', height: 200 }}
                    >
                        <Text style={{ ...defaultFont }} >주소를 추가해주세요</Text>
                    </TouchableWithoutFeedback>
                }
            </ScrollView>
        </View>
    )
}

export default AddressScreen
export { default as AppendAddressScreen } from './AppendAddressScreen'
export { default as SearchAddressScreen } from './SearchAddressScreen'
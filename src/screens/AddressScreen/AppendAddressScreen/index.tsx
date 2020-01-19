import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import { shadow, defaultFont, WIDTH, color1, middleFont, titleFont, cardHeight, bigFont, shadowBox, alignCenter, shadowOpt } from '../../../components/style'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import useAddress from '../../../hooks/useAddress'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import DefaultInput from '../../../components/Input/DefaultInput'
const { BoxShadow } = require('react-native-shadow')




const AppendAddressScreen = () => {
    const navigation = useNavigation()
    const { onAppend } = useAddress()

    const [basicAddress, setBasicAddress] = useState('')
    const [detailAddress, setDetailAddress] = useState('')

    const onSubmit = () => {
        if (basicAddress === '' || detailAddress === '') return;
        onAppend(basicAddress + ' ' + detailAddress, basicAddress);
        navigation.goBack()
    }

    const onBasic = () => {
        navigation.navigate('SearchAddressScreen', { setBasicAddress })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title='배송지 추가' goBack={() => navigation.goBack()} />

            <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 30 }}>
                <Text style={{ ...middleFont }}>기본주소</Text>
                <BoxShadow setting={{
                    width: WIDTH - 60, height: cardHeight, ...shadowOpt, style: {
                        marginTop: 10
                    }
                }}>
                    <TouchableWithoutFeedback
                        onPress={() => onBasic()}
                        style={{ width: WIDTH - 60, backgroundColor: 'white', ...shadowBox, paddingHorizontal: 16, alignSelf: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{ ...defaultFont, opacity: basicAddress === '' ? 0.5 : 1 }}>
                            {basicAddress == '' ? '주소검색' : basicAddress}
                        </Text>
                    </TouchableWithoutFeedback>
                </BoxShadow>

                <Text style={{ ...middleFont, marginTop: 20 }}>상세주소</Text>
                <DefaultInput
                    placeholder='정확히 입력해주세요'
                    value={detailAddress}
                    onChange={t => setDetailAddress(t)}
                />


                <TouchableWithoutFeedback
                    onPress={onSubmit}
                    style={{ opacity: basicAddress === '' || detailAddress === '' ? 0.5 : 1, width: WIDTH - 60, alignSelf: 'center', height: cardHeight, backgroundColor: color1, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}
                >
                    <Text style={{ ...titleFont, color: 'white' }} >배송지 추가</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default AppendAddressScreen

import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import { shadow, defaultFont, WIDTH, color1 } from '../../../components/style'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import useAddress from '../../../hooks/useAddress'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'





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
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>기본주소</Text>
                <TouchableWithoutFeedback
                    onPress={() => onBasic()}
                    style={{ width: WIDTH - 60, alignSelf: 'center', backgroundColor: 'white', height: 60, ...shadow, paddingHorizontal: 16, justifyContent: 'center', marginTop: 10 }}
                >
                    <Text style={{ ...defaultFont, opacity: basicAddress === '' ? 0.5 : 1 }}>
                        {basicAddress == '' ? '주소검색' : basicAddress}
                    </Text>
                </TouchableWithoutFeedback>

                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>상세주소</Text>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate}
                    style={{ width: WIDTH - 60, alignSelf: 'center', backgroundColor: 'white', height: 60, ...shadow, paddingHorizontal: 16, justifyContent: 'center', marginTop: 10 }}
                >
                    <TextInput
                        placeholder='정확히 입력해주세요'
                        style={{ fontSize: 16, fontWeight: 'bold' }}
                        value={detailAddress}
                        onChangeText={t => {
                            setDetailAddress(t)
                        }}
                    />
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback
                    onPress={onSubmit}
                    style={{ opacity: basicAddress === '' || detailAddress === '' ? 0.5 : 1, width: WIDTH - 60, alignSelf: 'center', height: 60, backgroundColor: color1, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >배송지 추가</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default AppendAddressScreen

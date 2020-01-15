import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { color1, shadow } from '../../components/style'
import useNavigation from '../../hooks/useNavigation'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const userName = '홍길동'



const MoreScreen = () => {
    const navigation = useNavigation()

    const menuList = [
        {
            name: '배송지 관리',
            onClick: () => navigation.navigate('AddressStack')
        },
        {
            name: '배송 가능 지역',
            onClick: () => { }
        },
        {
            name: '자주 하시는 질문',
            onClick: () => { }
        },
        {
            name: '개선 사항 요청',
            onClick: () => { }
        },
        {
            name: '친구에게 추천하기',
            onClick: () => { }
        }
    ]

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: color1, width: '100%', height: 80, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{userName}</Text>
            </View>


            {menuList.map((item, index) =>
                <TouchableWithoutFeedback
                    key={index}
                    onPress={item.onClick}
                    style={{ width: '100%', height: 60, backgroundColor: 'white', ...shadow, paddingHorizontal: 16, justifyContent: 'center', marginBottom: 16 }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                </TouchableWithoutFeedback>
            )}

            <Text style={{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center', marginTop: 8 }}>주식회사 썬더마트</Text>
        </ScrollView>
    )
}

export default MoreScreen

import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import useNavigation from '../../hooks/useNavigation'
import useAddress from '../../hooks/useAddress'
import useCart from '../../hooks/useCart'
import usePhone from '../../hooks/usePhone'
import { titleFont, defaultFont, WIDTH, alignCenter } from '../../components/style'
import LeftArrowHeader from '../../components/Header/LeftArrowHeader'
import { formatMoney } from '../../components/functions'
import { deliveryCharge } from '../../components/options'
import { BaseButton } from 'react-native-gesture-handler'

const serviceNoti = [
    '편의점을 방문하여 구매 후 전달하는 서비스 이며, 재고가 부족할 시 해당 물품은 제품이 없을 경우 담기 방법 설정에 따라 배달됩니다.',
    '최대 5개 품목, 한 품목당 수량 5개로 제한됩니다.',
    '물건의 부피 또는 무게로 인해 추가 배달팁이 발생할 수 있습니다.',
    '조리 배송 업무는 제한됩니다. (뜨거운물 붓기, 전자레인지 조리 등)',
    '배달 과정에서 이슈가 발생 할 경우 고객님께 전화를 드릴 수도 있습니다.',
    '배달원 방문 시 부재로 확인되는 경우 문 앞에 전달됩니다.',
    '청소년 보호를 위해서 주류 및 흡연 관련 제품은 배달하지 않습니다.'
]

type OrderOptionScreenProps = {
    soldOut: string,
}

const OrderOptionScreen = () => {

    const navigation = useNavigation<OrderOptionScreenProps>()
    const { number } = usePhone()
    const { presentAddress } = useAddress()
    const { cartList } = useCart()

    let itemPrice = 0
    let ttlNums = 0
    for (let i = 0; i < cartList.length; i++) {
        itemPrice += cartList[i].count * cartList[i].price
        ttlNums += cartList[i].count
    }

    const onCard = () => {
        navigation.navigate('OrderScreen', {
            type: 'card',
            input: {
                name: `${cartList[0].name}외 ${ttlNums - 1}개`,
                address: presentAddress?.fullAddress,
                price: itemPrice + deliveryCharge,
                number,
            }
        })
    }

    const onPhone = () => {
        navigation.navigate('OrderScreen', {
            type: 'phone',
            input: {
                name: `${cartList[0].name}외 ${ttlNums - 1}개`,
                address: presentAddress?.fullAddress,
                price: itemPrice + deliveryCharge,
                number,
            }
        })
    }

    return (
        <>
            <LeftArrowHeader title='주문' />
            <ScrollView style={{ flex: 1, padding: 20 }} >
                <Text style={{ ...titleFont }} >서비스 이용시 주의사항</Text>
                {serviceNoti.map((item, index) => <Text key={index} style={{ ...defaultFont, lineHeight: 20, marginTop: 4 }} >{index + 1}. {item}</Text>)}

                <Text style={{ ...titleFont, marginTop: 40 }} >주문내용</Text>
                <Text style={{ ...defaultFont, lineHeight: 20, marginTop: 10 }} >상품 : {cartList[0].name}외 {ttlNums - 1}개</Text>
                <Text style={{ ...defaultFont, lineHeight: 20, marginTop: 10 }} >주소 : {presentAddress?.fullAddress}</Text>
                <Text style={{ ...defaultFont, lineHeight: 20, marginTop: 20 }} >제품이 없을시 : {navigation.getParam('soldOut')}</Text>
                <Text style={{ ...defaultFont, lineHeight: 20, marginTop: 10 }} >연락처 : {number}</Text>
                <Text style={{ ...defaultFont, lineHeight: 20, marginTop: 20 }} >결제금액 : {formatMoney(itemPrice + deliveryCharge)}원</Text>
                <View style={{ width: WIDTH - 40, borderRadius: 4, borderColor: '#dbdbdb', borderWidth: 1, height: 36, ...alignCenter, marginTop: 40, overflow: 'hidden' }}>
                    <BaseButton
                        rippleColor='#bbb'
                        onPress={onCard}
                        style={{ width: WIDTH - 40, height: 36, ...alignCenter }}
                    >
                        <Text style={{ ...defaultFont }}>카드결제</Text>
                    </BaseButton>
                </View>
                <View style={{ width: WIDTH - 40, borderRadius: 4, borderColor: '#dbdbdb', borderWidth: 1, height: 36, ...alignCenter, marginTop: 8, overflow: 'hidden', marginBottom: 100 }}>
                    <BaseButton
                        rippleColor='#bbb'
                        onPress={onPhone}
                        style={{ width: WIDTH - 40, height: 36, ...alignCenter }}
                    >
                        <Text style={{ ...defaultFont }}>휴대폰소액결제</Text>
                    </BaseButton>
                </View>
            </ScrollView>
        </>
    )
}

export default OrderOptionScreen

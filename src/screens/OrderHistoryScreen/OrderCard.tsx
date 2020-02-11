import React from 'react'
import { View, Text } from 'react-native'
import { orderHistory } from '.'
import { formatMoney, number2koreanDay } from '../../components/functions'
import { defaultFont, WIDTH, alignCenter } from '../../components/style'
import ShopIcon from '../../components/Icon/ShopIcon'
import useNavigation from '../../hooks/useNavigation'
import { BaseButton } from 'react-native-gesture-handler'

const OrderCard: React.FC<orderHistory> = (props) => {

    const navigation = useNavigation()
    const newDate = new Date(props.date * 1000)
    const dateFormat = `${newDate.getMonth() + 1}/${newDate.getDate()} (${number2koreanDay(newDate.getDay())})`

    const onOrderDetail = () => {
        navigation.navigate('OrderHistoryDetailScreen', { orderId: props.orderId })
    }


    return (
        <View style={{ width: '100%', marginTop: 24, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >
                <ShopIcon height={24} width={42} shop={props.shop} resizeMode='contain' />
                <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', marginLeft: 8, fontWeight: 'bold' }} >{dateFormat}</Text>
            </View>
            <Text style={{ ...defaultFont, marginTop: 8 }} >{props.title} {formatMoney(props.total_price)}원</Text>
            {props.order_state != '배송 완료' &&
                <Text style={{ ...defaultFont, marginTop: 8, color: props.order_state == '주문 취소' ? '#CF4F4F' : '#000' }}>{props.order_state}{props.order_state == '주문 취소' ? '' : '...'}</Text>
            }
            <View style={{ width: WIDTH - 40, borderRadius: 4, borderColor: '#dbdbdb', borderWidth: 1, height: 36, ...alignCenter, marginTop: 8, overflow: 'hidden' }}>
                <BaseButton
                    rippleColor='#bbb'
                    onPress={onOrderDetail}
                    style={{ width: WIDTH - 40, height: 36, ...alignCenter }}
                >
                    <Text style={{ ...defaultFont }}>주문 내역</Text>
                </BaseButton>
            </View>
        </View>
    )
}

export default OrderCard

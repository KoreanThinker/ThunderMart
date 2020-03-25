import React from 'react'
import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native'
import DefaultHeader from '../../components/Header/DefaultHeader'
import { headerHeight, alignCenter, titleFont, fontColor1 } from '../../components/style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { shopNameType, orderStateType } from '../../components/types'
import OrderCard from './OrderCard'

export type orderHistory = {
    createdAt: string,
    orderId: string,
    date: number,
    shop: shopNameType,
    title: string,
    total_price: number,
    order_state: orderStateType
}



const OrderHistoryScreen = () => {

    const data: orderHistory[] = [
        {
            createdAt: "153513263",
            orderId: "aadbf15as",
            date: 1581421192,
            shop: 'CU',
            title: '신라면 외 3개',
            total_price: 3600,
            order_state: '배송중'
        },
        {
            createdAt: "153513263",
            orderId: "aadbf15as",
            date: 1580816392,
            shop: 'GS',
            title: '신라면 외 3개',
            total_price: 3600,
            order_state: '배송 완료'
        },
        {
            createdAt: "153513263",
            orderId: "aadbf15as",
            date: 1578742792,
            shop: 'SEVEN',
            title: '신라면 외 3개',
            total_price: 3600,
            order_state: '주문 취소'
        }
    ]



    const onRefresh = () => {

    }


    return (
        <View style={{ flex: 1 }}>
            {/*Header*/}
            <DefaultHeader>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: headerHeight }} />
                    <Text style={{ ...titleFont, color: fontColor1 }} >주문 내역</Text>
                    <TouchableWithoutFeedback onPress={onRefresh}>
                        <View style={{ width: headerHeight, height: headerHeight, ...alignCenter }} >
                            <Icon name='refresh' size={26} color={fontColor1} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </DefaultHeader>
            <FlatList
                data={data}
                style={{ flex: 1 }}
                keyExtractor={(item, index) => `orderHistoryList${index}`}
                renderItem={({ item }) => <OrderCard {...item} />}
            />

        </View >
    )
}

export default OrderHistoryScreen
export { default as OrderHistoryDetailScreen } from './OrderHistoryDetailScreen'
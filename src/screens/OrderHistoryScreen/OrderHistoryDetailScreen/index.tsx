import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import { shopNameType, orderStateType } from '../../../components/types'
import { soldOutOptionType } from '../../../components/options'
import OrderData from './OrderData'
import ItemHistory from './ItemHistory'
import { borderBottom, defaultFont } from '../../../components/style'
import ShopIcon from '../../../components/Icon/ShopIcon'

export type orderHistoryDetailItem = {
    id: string,
    name: string,
    price: number,
    count: number
}

export type orderData = {
    address: string,
    phone_number: string,
    sold_out_option: string
}

export type orderHistoryDetail = {
    orderId: string,
    date: number, //timestamp
    shop: shopNameType,
    order_state: orderStateType, //order_state타입
    total_price: number,
    delivery_charge: number,
    order_item_list: orderHistoryDetailItem[],
    order_data: orderData
}



const OrderHistoryDetailScreen = () => {

    const data: orderHistoryDetail = {
        orderId: 'BOASLG502A5',//
        date: 1581429648, //
        shop: 'GS',//
        order_state: '배송중',//
        total_price: 16900,
        delivery_charge: 2000,
        order_item_list: [
            {
                id: 'item-AAS35DND9BKDJ',
                name: 'CU 총각김치',
                price: 1200,
                count: 6
            },
            {
                id: 'item-AAS35DND9BKDJ',
                name: '신라면',
                price: 1200,
                count: 3
            }
        ],
        order_data: {
            address: '경기도 용인시 기흥구 신갈동 산양마을 푸르지오 468동 461호',
            phone_number: '01012345678',
            sold_out_option: '배송 전 전화'
        }
    }

    const itemCount = data.order_item_list.map(item => item.count).reduce((a, b) => a + b, 0)
    const newDate = new Date(data.date * 1000)
    const dateFormat = `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일 ${newDate.getHours()}:${newDate.getMinutes()}`

    return (
        <View style={{ flex: 1 }}>
            <LeftArrowHeader title='주문 내역' />

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <View style={{ width: '100%', padding: 20, marginTop: 10, borderBottomColor: '#dbdbdb', borderBottomWidth: 1 }} >
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >
                        <ShopIcon width={63} height={36} resizeMode='contain' shop={data.shop} />
                        <Text style={{ ...defaultFont, marginLeft: 8, marginBottom: 4 }} >{data.order_state}</Text>
                    </View>
                    <Text style={{ ...defaultFont, marginTop: 4 }} >{data.order_item_list[0].name} 외 {itemCount - 1}개</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)', marginTop: 8 }} >주문일시 : {dateFormat}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)', marginTop: 4 }}>주문번호 : {data.orderId}</Text>
                </View>

                <ItemHistory data={data.order_item_list} price={data.total_price} delivery={data.delivery_charge} />
                <OrderData {...data.order_data} />
            </ScrollView>
        </View>
    )
}

export default OrderHistoryDetailScreen

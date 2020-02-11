import React from 'react'
import { View, Text } from 'react-native'
import { orderHistoryDetailItem } from '.'
import { titleFont, defaultFont } from '../../../components/style'
import { formatMoney } from '../../../components/functions'

type ItemHistoryProps = {
    data: orderHistoryDetailItem[],
    price: number,
    delivery: number
}

const ItemHistory: React.FC<ItemHistoryProps> = (props) => {

    const renderItem = (data: orderHistoryDetailItem, index: number) =>
        <View key={index} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: index == 0 ? 0 : 8 }} >
            <Text style={{ ...defaultFont }} >{data.name} {data.count}개</Text>
            <Text style={{ ...defaultFont }}>{formatMoney(data.price)}원</Text>
        </View>

    return (
        <View style={{ padding: 20, marginBottom: 60 }} >

            <View style={{ width: '100%', borderBottomColor: '#dbdbdb', borderBottomWidth: 1, marginTop: 8, paddingBottom: 16 }} >
                {props.data.map((item, index) => renderItem(item, index))}
            </View>

            <View style={{ width: '100%', borderBottomColor: '#dbdbdb', borderBottomWidth: 1, marginTop: 28, paddingBottom: 16 }} >
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text style={{ ...defaultFont }} >총금액</Text>
                    <Text style={{ ...defaultFont }}>{formatMoney(props.price - props.delivery)}원</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }} >
                    <Text style={{ ...defaultFont }} >배달비</Text>
                    <Text style={{ ...defaultFont }}>{formatMoney(props.delivery)}원</Text>
                </View>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 28 }} >
                <Text style={{ ...titleFont }} >총 결제금액</Text>
                <Text style={{ ...titleFont }}>{formatMoney(props.price)}원</Text>
            </View>
        </View>
    )
}

export default ItemHistory

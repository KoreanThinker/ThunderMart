import React from 'react'
import { View, Text } from 'react-native'
import { orderData } from '.'
import { defaultFont } from '../../../components/style'
import { formatPhone } from '../../../components/functions'


const OrderData: React.FC<orderData> = (props) => {
    return (
        <View style={{ width: '100%', padding: 20, borderTopColor: '#dbdbdb', borderTopWidth: 1, marginBottom: 100 }}>
            <View style={{ width: '100%', borderBottomColor: '#dbdbdb', borderBottomWidth: 1, paddingBottom: 20 }} >
                <Text style={{ ...defaultFont }} >배달주소</Text>
                <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold', marginTop: 4 }} >{props.address}</Text>
            </View>

            <View style={{ width: '100%', borderBottomColor: '#dbdbdb', borderBottomWidth: 1, paddingBottom: 20, marginTop: 20 }} >
                <Text style={{ ...defaultFont }} >전화번호</Text>
                <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold', marginTop: 4 }} >{formatPhone(props.phone_number)}</Text>
            </View>

            <View style={{ width: '100%', borderBottomColor: '#dbdbdb', borderBottomWidth: 1, paddingBottom: 20, marginTop: 20 }} >
                <Text style={{ ...defaultFont }} >제품이 없을 경우</Text>
                <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold', marginTop: 4 }} >{props.sold_out_option}</Text>
            </View>
        </View>
    )
}

export default OrderData

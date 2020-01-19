import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useCart from '../../hooks/useCart'
import { deliveryCharge } from '../../components/options'
import { formatMoney } from '../../components/functions'
import { titleFont } from '../../components/style'

const PriceList = () => {

    const { cartList } = useCart()

    let itemPrice = 0
    for (let i = 0; i < cartList.length; i++) {
        itemPrice += cartList[i].count * cartList[i].price
    }



    return (
        <View style={{ width: '100%', paddingHorizontal: 16, marginTop: 35 }}>
            <View style={{ flexDirection: 'row', marginBottom: 12, width: '100%', justifyContent: 'space-between', }}>
                <Text style={styles.text}>상품가격</Text>
                <Text style={styles.text}>{formatMoney(itemPrice)}원</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 30, width: '100%', justifyContent: 'space-between', }}>
                <Text style={styles.text}>배달비</Text>
                <Text style={styles.text}>{formatMoney(deliveryCharge)}원</Text>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                <Text style={styles.text}>총금액</Text>
                <Text style={styles.text}>{formatMoney(itemPrice + deliveryCharge)}원</Text>
            </View>
        </View>
    )
}

export default PriceList


const styles = StyleSheet.create({
    text: {
        ...titleFont
    }
})

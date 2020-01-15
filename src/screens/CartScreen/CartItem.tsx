import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import { itemType } from '../../components/types'
import { shadow, color1 } from '../../components/style'
import FastImage from 'react-native-fast-image'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useCart from '../../hooks/useCart'
import { cartType } from '../../modules/Cart'
import Icon from 'react-native-vector-icons/AntDesign'
import { formatMoney } from '../../components/functions'

type CartItemProps = {
    item: cartType
}


const CartItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
    const { onRemove, onPlus, onMinus, cartList } = useCart();


    return (
        <View
            style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: 'white', ...shadow, marginBottom: 20 }}
        >
            <View style={{ flex: 1, paddingLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                <FastImage
                    style={{ width: 60, height: 60 }}
                    source={{ uri: item.image }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={{ flex: 1, paddingLeft: 12, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} numberOfLines={1} >{item.name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{formatMoney(item.price)}원</Text>
                </View>
            </View>

            <View style={{ height: '100%', width: 110, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={() => onMinus(item.id)}>
                    <Icon name='minuscircleo' size={22} />
                </TouchableWithoutFeedback>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 6 }}>{item.count}</Text>
                <TouchableWithoutFeedback onPress={() => onPlus(item.id)}>
                    <Icon name='pluscircleo' size={22} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default CartItem

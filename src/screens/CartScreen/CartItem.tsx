import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import { itemType } from '../../components/types'
import { shadow, color1, cardHeight, borderBottom, middleFont } from '../../components/style'
import FastImage from 'react-native-fast-image'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useCart from '../../hooks/useCart'
import { cartType } from '../../modules/Cart'
import Icon from 'react-native-vector-icons/AntDesign'
import { formatMoney } from '../../components/functions'
import MaterialToggle from '../../components/Button/MaterialToggle'

type CartItemProps = {
    item: cartType
}


const CartItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
    const { onRemove, onPlus, onMinus, cartList, onToggle } = useCart();


    return (
        <View
            style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: 'white', ...borderBottom }}
        >
            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialToggle
                    value={item.toggleOn}
                    onPress={() => onToggle(item.id)}
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FastImage
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.image }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={{ flex: 1, paddingLeft: 12, justifyContent: 'center' }}>
                    <Text style={{ ...middleFont }} numberOfLines={1} >{item.name}</Text>
                    <Text style={{ ...middleFont }}>{formatMoney(item.price)}원</Text>
                </View>
            </View>

            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={() => onMinus(item.id)} style={{ height: '100%', justifyContent: 'center' }}>
                    <Icon name='minuscircleo' size={18} style={{ marginLeft: 20 }} />
                </TouchableWithoutFeedback>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 8 }}>{item.count}</Text>
                <TouchableWithoutFeedback onPress={() => onPlus(item.id)} style={{ height: '100%', justifyContent: 'center' }}>
                    <Icon name='pluscircleo' size={18} style={{ marginRight: 20 }} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default CartItem

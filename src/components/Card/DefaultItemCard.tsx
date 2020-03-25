import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { middleFont, borderBottom, color1 } from '../style';
import { formatMoney } from '../functions';
import useNavigation from '../../hooks/useNavigation';
import useCart from '../../hooks/useCart';
import { itemType } from '../types';
import FastImage from 'react-native-fast-image';


type DefaultItemCardProps = {
    item: itemType
}


const DefaultItemCard: React.FunctionComponent<DefaultItemCardProps> = ({ item }) => {
    const navigation = useNavigation();

    const { onAppend, cartList, onRemove } = useCart();

    //이미 장바구니에 담겼는지 확인하는 용
    const cartIdList = cartList.map((item) => item.id);

    const onItem = (id: string) => {
        //장바구니버튼말고 다른 영역 터치했을떄
    }

    const onCart = (item: itemType) => {
        onAppend(item);
    }

    const onCancel = (id: string) => {
        onRemove(id);
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => onItem(item.id)}
            style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: 'white', ...borderBottom }}
        >
            <View style={{ flex: 1, paddingLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                <FastImage
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.image_url }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={{ flex: 1, paddingLeft: 12, justifyContent: 'center' }}>
                    <Text style={{ ...middleFont }} numberOfLines={1} >{item.name}</Text>
                    <Text style={{ ...middleFont }}>{formatMoney(item.price)}원</Text>
                </View>
            </View>

            {
                cartIdList.indexOf(item.id) === -1
                    ?
                    <TouchableWithoutFeedback
                        onPress={() => onCart(item)}
                        style={{ height: '100%', width: 110, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 70, height: 20, borderRadius: 20, backgroundColor: color1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 9, fontWeight: 'bold' }}>장바구니</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <TouchableWithoutFeedback
                        onPress={() => onCancel(item.id)}
                        style={{ height: '100%', width: 110, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 70, height: 20, borderRadius: 20, backgroundColor: '#00000010', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>취소</Text>
                        </View>
                    </TouchableWithoutFeedback>

            }

        </TouchableWithoutFeedback>
    )
}

export default DefaultItemCard

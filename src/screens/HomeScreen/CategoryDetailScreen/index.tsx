import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { color1, shadow, WIDTH } from '../../../components/style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import useNavigation from '../../../hooks/useNavigation';
import { itemType } from '../../../components/types';
import useCart from '../../../hooks/useCart';
import { formatMoney } from '../../../components/functions'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'


const ExamData: itemType[] = [
    {
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc',
        name: '햇반asdfasdfasdfasdf',
        price: 20001,
        id: 'caty1245d2if'
    },
    {
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc',
        name: '햇반',
        price: 20002,
        id: 'category12454dif'
    },
    {
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc',
        name: '햇반',
        price: 20003,
        id: 'category12dif'
    }
]

const CategoryDetailScreen = () => {
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

    const RenderItem = (item: itemType) =>
        <TouchableWithoutFeedback
            onPress={() => onItem(item.id)}
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

            {
                cartIdList.indexOf(item.id) === -1
                    ?
                    <TouchableWithoutFeedback
                        onPress={() => onCart(item)}
                        style={{ height: '100%', width: 110, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 70, height: 20, borderRadius: 10, backgroundColor: color1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 7, color: 'white', fontWeight: 'bold' }}>장바구니</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <TouchableWithoutFeedback
                        onPress={() => onCancel(item.id)}
                        style={{ height: '100%', width: 110, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 70, height: 20, borderRadius: 10, backgroundColor: color1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 7, color: 'white', fontWeight: 'bold' }}>취소</Text>
                        </View>
                    </TouchableWithoutFeedback>

            }

        </TouchableWithoutFeedback>


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title={'간식'} goBack={() => navigation.goBack()} />

            <FlatList
                style={{ flex: 1 }}
                data={ExamData}
                renderItem={({ item }) => RenderItem(item)}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CategoryDetailScreen

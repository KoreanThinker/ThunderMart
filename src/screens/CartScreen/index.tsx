import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native'
import { color1, WIDTH, shadow, HEIGHT, hightLightBlue } from '../../components/style'
import useCart from '../../hooks/useCart';
import { soldOutOption, minPrice } from '../../components/options'
import Modal from "react-native-modal";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useNavigation from '../../hooks/useNavigation';
import usePhone from '../../hooks/usePhone';

import PriceList from './PriceList';
import CartItem from './CartItem'
import AddressBanner from './AddressBanner';




const CartScreen = () => {
    const navigation = useNavigation()
    const { cartList } = useCart();
    const { number, onChange } = usePhone();

    //제품 없을 경우 옵션들
    const [soldOutOptionIndex, setSoldOutOptionIndex] = useState(0)
    const [soldOutModal, setSoldOutModal] = useState(false);

    let ttlPrice = 0
    for (let i = 0; i < cartList.length; i++) {
        ttlPrice += cartList[i].count * cartList[i].price
    }

    const onOrder = () => {
        if (!number) return
        if (cartList.length === 0) return
        if (ttlPrice < minPrice) return
        if (soldOutOptionIndex === 0) return
    }

    const onAdd = () => {
        navigation.navigate('HomeStack')
    }

    const onPhoneSellect = () => {
        navigation.navigate('PhoneStack');
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                style={{ flex: 1 }}
                data={cartList}
                overScrollMode='never'
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<AddressBanner />}
                renderItem={({ item }) => <CartItem item={item} />}
                ListFooterComponent={
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 40 }}>
                        <PriceList />
                        {/* 제품이없을경우 */}
                        <TouchableWithoutFeedback
                            onPress={() => setSoldOutModal(true)}
                            style={{ width: WIDTH - 60, height: 60, backgroundColor: 'white', ...shadow, marginTop: 30, paddingHorizontal: 16, justifyContent: 'center' }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{soldOutOption[soldOutOptionIndex]}</Text>
                        </TouchableWithoutFeedback>
                        {/* 연락처 */}
                        <TouchableWithoutFeedback
                            onPress={onPhoneSellect}
                            style={{ width: WIDTH - 60, height: 60, backgroundColor: 'white', ...shadow, marginTop: 20, paddingHorizontal: 16, justifyContent: 'center' }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{number ? number : '연락처'}</Text>
                        </TouchableWithoutFeedback>
                        {/* 주문하기 */}
                        <TouchableWithoutFeedback
                            onPress={onOrder}
                            style={{ width: WIDTH - 60, height: 60, backgroundColor: color1, marginTop: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>주문하기</Text>
                        </TouchableWithoutFeedback>

                    </View>
                }
                ListEmptyComponent={
                    <TouchableWithoutFeedback
                        onPress={onAdd}
                        style={{ width: '100%', height: 60, backgroundColor: 'white', ...shadow, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>상품을 추가해주세요</Text>
                    </TouchableWithoutFeedback>
                }
            />

            <Modal
                isVisible={soldOutModal}
                onBackButtonPress={() => setSoldOutModal(false)}
                onBackdropPress={() => setSoldOutModal(false)}
                backdropOpacity={0.5}
                backdropTransitionInTiming={0}
                backdropTransitionOutTiming={0}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <View style={{ width: '100%', backgroundColor: 'white' }}>
                    {soldOutOption.map((item, index) =>
                        index !== 0 && <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setSoldOutOptionIndex(index);
                                setSoldOutModal(false)
                            }}
                            style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }}
                        >

                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </Modal>

        </View>
    )
}

export default CartScreen
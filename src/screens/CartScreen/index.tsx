import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native'
import { color1, WIDTH, shadow, HEIGHT, hightLightBlue, cardHeight, titleFont, borderBottom, middleFont, defaultFont } from '../../components/style'
import useCart from '../../hooks/useCart';
import { soldOutOption, minPrice } from '../../components/options'
import Modal from "react-native-modal";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useNavigation from '../../hooks/useNavigation';
import usePhone from '../../hooks/usePhone';
import PriceList from './PriceList';
import CartItem from './CartItem'
import AddressBanner from './AddressBanner';
import RemoveManager from './RemoveManager';
import ShadowBorderView from '../../components/View/ShadowBorderView';
import { formatPhone, toastMessage, formatMoney } from '../../components/functions';




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
        if (!number) {
            toastMessage('연락처를 입력해주세요')
            return
        } else if (cartList.length === 0) {
            toastMessage('상품을 골라주세요')
            return
        } else if (ttlPrice < minPrice) {
            toastMessage(`최소 결제금액은 ${formatMoney(minPrice)}원 입니다.`)
            return
        } else if (soldOutOptionIndex === 0) {
            toastMessage('제품이 없을 경우 담기 방법을 골라주세요')
            return
        }
        navigation.navigate('OrderOptionScreen', { soldOut: soldOutOption[soldOutOptionIndex] })
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
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<>
                    <AddressBanner />
                    {cartList.length !== 0 && <RemoveManager />}
                </>}
                renderItem={({ item }) => <CartItem item={item} />}
                ListFooterComponent={
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 40 }}>
                        <PriceList />
                        {/* 제품이없을경우 */}
                        <ShadowBorderView
                            onPress={() => setSoldOutModal(true)}
                            value={soldOutOption[soldOutOptionIndex]}
                            marginTop={30}
                        />
                        {/* 연락처 */}
                        <ShadowBorderView
                            onPress={() => onPhoneSellect()}
                            value={number ? formatPhone(number) : '연락처'}
                            marginTop={20}
                        />
                        {/* 주문하기 */}
                        <TouchableWithoutFeedback
                            onPress={onOrder}
                            style={{ width: WIDTH - 60, height: cardHeight, backgroundColor: color1, marginTop: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>주문하기</Text>
                        </TouchableWithoutFeedback>

                    </View>
                }
                ListEmptyComponent={
                    <TouchableWithoutFeedback
                        onPress={onAdd}
                        style={{ width: '100%', height: 120, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', ...borderBottom }}
                    >
                        <Text style={{ ...titleFont }}>상품을 추가해주세요</Text>
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

                            <Text style={{ ...defaultFont }}>{item}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </Modal>

        </View>
    )
}

export default CartScreen
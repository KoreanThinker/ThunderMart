import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useCart from '../../hooks/useCart'
import MaterialToggle from '../../components/Button/MaterialToggle'
import { middleFont } from '../../components/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RemoveManager = () => {
    const { onToggleRemove, cartList, onToggleAll } = useCart()

    let value = cartList.length != 0 ? true : false;
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].toggleOn === false) {
            value = false
            break
        }
    }

    return (
        <View style={{ width: '100%', height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableWithoutFeedback
                style={{ height: '100%', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => onToggleAll()}
            >
                <View style={{ width: 50, alignItems: 'center' }}>
                    <MaterialToggle
                        value={value}
                        onPress={() => { }}
                    />
                </View>
                <Text style={{ ...middleFont }}>전체 선택</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPress={() => {
                    onToggleRemove()
                }}
                style={{ marginRight: 20, flexDirection: 'row', alignItems: 'center' }}
            >
                <Icon name='delete' size={20} />
                <Text style={{ ...middleFont, marginLeft: 8 }}>선택 삭제</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default RemoveManager

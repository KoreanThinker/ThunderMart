import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ToastAndroid, ListRenderItemInfo } from 'react-native'
import LeftArrowHeader from '../../components/Header/LeftArrowHeader'
import useNavigation from '../../hooks/useNavigation'
import useAddress from '../../hooks/useAddress'
import { cardHeight, borderBottom, defaultFont } from '../../components/style'
import { shopSearchRadius } from '../../components/options'
import FastImage from 'react-native-fast-image'
import { shopName2shopType, shopType2Logo } from '../../components/functions'
import { shopNameType } from '../../components/types'
var secret = require('../../../secret.json');


type store = {
    name: string,
    type: shopNameType,

}

const ChangeStoreScreen = () => {
    const navigation = useNavigation()
    const { presentAddress } = useAddress()
    const [storeList, setStoreList] = useState<store[]>([])

    if (presentAddress == null) {
        navigation.navigate('MainBottomTab')
        navigation.navigate('AddressStack')
        ToastAndroid.show('주소를 먼저 선택해주세요', ToastAndroid.SHORT)
    }

    useEffect(() => {
        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${presentAddress?.basicAddress}`, {
            headers: {
                Authorization: secret.kakaoApi.restApiKey
            }
        })
            .then(res => res.json())
            .then(res => {
                fetch(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=CS2&y=${res.documents[0].address.y}&x=${res.documents[0].address.x}&radius=${shopSearchRadius}`, {
                    headers: {
                        Authorization: secret.kakaoApi.restApiKey
                    }
                })
                    .then(res => res.json())
                    .then(res => {
                        setStoreList(res.documents.map((item: any) => {
                            return {
                                name: item.place_name,
                                type: shopName2shopType(item.place_name)
                            }
                        }))
                        console.log(storeList)
                    })
                    .catch(error => {
                        console.log(error)
                        goBack()
                    });
            })
            .catch((error) => {
                console.log(error)
                goBack();
            })
    }, [])


    const goBack = () => {
        navigation.navigate("MainBottomTab")
    }

    const renderItem = (item: ListRenderItemInfo<store>) =>
        <View style={{ width: '100%', height: cardHeight, ...borderBottom, flexDirection: 'row', alignItems: 'center', paddingLeft: 16 }}>
            <View style={{ width: 56 }}>
                <FastImage
                    style={{ width: '100%', height: 14 }}
                    source={{ uri: shopType2Logo(item.item.type) }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <Text style={{ ...defaultFont, marginLeft: 10 }}>{item.item.name}</Text>
        </View>

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title='편의점 선택' goBack={() => navigation.navigate('MainBottomTab')} />
            <FlatList
                style={{ flex: 1 }}
                data={storeList}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

export default ChangeStoreScreen

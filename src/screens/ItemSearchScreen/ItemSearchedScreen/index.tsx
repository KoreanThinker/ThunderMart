import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import { alignCenter, borderBottom, titleFont } from '../../../components/style'
import { itemType } from '../../../components/types'
import DefaultItemCard from '../../../components/Card/DefaultItemCard'
import DefaultActivityIndicator from '../../../components/Indicator/DefaultActivityIndicator'
import getItemByKeyword from './getItemByKeyword'
import { toastMessage } from '../../../components/functions'
import useShop from '../../../hooks/useShop'

type NavigationParams = {
    text: string
}


const ItemSearchedScreen = () => {
    const navigation = useNavigation<NavigationParams>()
    const { shopType } = useShop()

    const [data, setData] = useState<itemType[]>([])
    const [loading, setLoading] = useState(true)

    const init = async () => {
        try {
            if (shopType == null || shopType == 'ELSE') {
                navigation.goBack()
                return
            }
            const keyword: string = navigation.state.params?.text as string
            const res: itemType[] = await getItemByKeyword(shopType, keyword)
            console.log(res)
            setData(res)
            setLoading(false)
        } catch (error) {
            navigation.goBack()
            toastMessage('오류')
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader
                title={navigation.state.params?.text}
                goBack={() => navigation.goBack()}
            />
            {loading ?
                <DefaultActivityIndicator />
                :
                <FlatList
                    data={data}
                    renderItem={({ item }) => <DefaultItemCard item={item} />}
                    ListEmptyComponent={
                        <View style={{ width: '100%', height: 200, ...alignCenter, ...borderBottom }}>
                            <Text style={{ ...titleFont, color: '#777' }} >검색결과가 없습니다</Text>
                        </View>
                    }
                />
            }


        </View>
    )
}

export default ItemSearchedScreen

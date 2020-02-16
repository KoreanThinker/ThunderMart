import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import useNavigation from '../../../hooks/useNavigation';
import { itemType } from '../../../components/types';
import useCart from '../../../hooks/useCart';
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import DefaultItemCard from '../../../components/Card/DefaultItemCard'
import { alignCenter, defaultFont } from '../../../components/style';
import DefaultActivityIndicator from '../../../components/Indicator/DefaultActivityIndicator';
import getItemByCategory from './getItemByCategory';
import { toastMessage } from '../../../components/functions';
import useShop from '../../../hooks/useShop';

type NavigationParams = {
    category: string,
    categoryKey: string
}

const CategoryDetailScreen = () => {
    const navigation = useNavigation<NavigationParams>();

    const { shopType } = useShop()

    const [data, setData] = useState<itemType[]>([])
    const [loading, setLoading] = useState(true)

    const init = async () => {
        try {
            if (shopType == null || shopType == 'ELSE') return
            const category = navigation.state.params?.categoryKey
            const res: itemType[] = await getItemByCategory(shopType, Number(category))
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
            <LeftArrowHeader title={navigation.state.params?.category} goBack={() => navigation.goBack()} />
            {loading ?
                <DefaultActivityIndicator />
                :
                <FlatList
                    style={{ flex: 1 }}
                    data={data}
                    renderItem={({ item }) => <DefaultItemCard item={item} />}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text style={{ alignSelf: 'center', marginTop: 70, ...defaultFont }} >상품이 없습니다...</Text>}
                />
            }

        </View>
    )
}

export default CategoryDetailScreen

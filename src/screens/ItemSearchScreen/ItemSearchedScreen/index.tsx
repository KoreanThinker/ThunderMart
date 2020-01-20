import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import { alignCenter, borderBottom, titleFont } from '../../../components/style'
import { itemType } from '../../../components/types'
import DefaultItemCard from '../../../components/Card/DefaultItemCard'

type NavigationParams = {
    text: string
}


const ExamData: itemType[] = [
    {
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc',
        name: '햇반',
        price: 2000,
        id: 'caty1245d2if'
    },
    {
        image: 'https://cdn.allets.com/500/2019/02/22/500_438657_1550821872.jpeg',
        name: '치킨팝',
        price: 1000,
        id: 'category12454dif'
    },
    {
        image: 'https://t1.daumcdn.net/news/201901/31/akn/20190131153226759rjsg.jpg',
        name: '메로나',
        price: 800,
        id: 'category12dif'
    },
    {
        image: 'http://www.costco.co.kr/medias/sys_master/images/h55/h6e/9868094472222.jpg',
        name: '신라면 컵',
        price: 900,
        id: 'caty12f45d2if'
    },
    {
        image: 'http://image.nongshim.com/non/pro/1447924027938.jpg',
        name: '짜파게티',
        price: 1050,
        id: 'category124gs54dif'
    },
    {
        image: 'http://img.danawa.com/prod_img/500000/315/969/img/1969315_1.jpg?shrink=500:500&_v=20170309155800',
        name: '포카리스웨트 500ml',
        price: 1500,
        id: 'categorasy12dif'
    }
]

const ItemSearchedScreen = () => {
    const navigation = useNavigation<NavigationParams>()
    const [data, setData] = useState<itemType[]>(ExamData)



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader
                title={navigation.state.params?.text}
                goBack={() => navigation.goBack()}
            />
            <FlatList
                data={data}
                renderItem={({ item }) => <DefaultItemCard item={item} />}
                ListEmptyComponent={
                    <View style={{ width: '100%', height: 200, ...alignCenter, ...borderBottom }}>
                        <Text style={{ ...titleFont, color: '#777' }} >검색결과가 없습니다</Text>
                    </View>
                }
            />

        </View>
    )
}

export default ItemSearchedScreen

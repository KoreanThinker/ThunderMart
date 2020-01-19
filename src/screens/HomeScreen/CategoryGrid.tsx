import React from 'react'
import { View, Text } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import FastImage from 'react-native-fast-image'
import { WIDTH, defaultFont } from '../../components/style';
import useNavigation from '../../hooks/useNavigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const categorys = [ //서버로
    {
        name: '밥, 도시락',
        key: "a2sdf",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "a4sdf",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "as6df",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "as34df",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "asd75f",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "as234df",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "asd62f",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "asd62f",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "asd62f",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '밥, 도시락',
        key: "asd62f",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
]


const BOXSIZE = (WIDTH - 20) / 3

const CategoryGrid = () => {
    const navigation = useNavigation();

    const emptyArray: string[] = []
    for (let i = 0; i < (((3 - (categorys.length % 3)) % 3)); i++) {
        emptyArray.push('');
    }


    const onCategory = (categoryKey: string) => {
        navigation.navigate('CategoryDetailScreen', { categoryKey })
    }


    const RenderItem = (item: any, index: number) =>
        <TouchableWithoutFeedback
            key={index}
            onPress={() => onCategory(item.key)}
            style={{ padding: 10, alignItems: 'center', justifyContent: 'center', width: BOXSIZE, height: BOXSIZE, borderColor: '#dbdbdb', borderWidth: 0.5 }}
        >
            <FastImage
                style={{ width: '100%', height: BOXSIZE - 40 }}
                source={{ uri: item.image }}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{ ...defaultFont, marginTop: 4 }}>{item.name}</Text>
        </TouchableWithoutFeedback>

    const RenderEmpty = (index: number) => <View key={index} style={{ width: BOXSIZE, height: BOXSIZE, borderColor: '#dbdbdb', borderWidth: 0.5 }} />

    return (
        <View style={{ width: '100%' }}>
            <View style={{ width: WIDTH - 19, alignSelf: 'center', marginTop: 30, flexDirection: 'row', flexWrap: 'wrap', borderColor: '#dbdbdb', borderWidth: 0.5, marginBottom: 40 }}>
                {categorys.map((item, index) => RenderItem(item, index))}
                {emptyArray.map((info, index) => RenderEmpty(index))}
            </View>
        </View>
    )


}

export default CategoryGrid

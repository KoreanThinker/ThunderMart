import React from 'react'
import { View, Text } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import FastImage from 'react-native-fast-image'
import { WIDTH, defaultFont, alignCenter } from '../../components/style';
import useNavigation from '../../hooks/useNavigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo'


const categorys = [ //서버로
    {
        name: '밥, 도시락',
        key: "a2sdf",
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrds7AuKtcUAL2ChA7KCwJsUwZaGIsLrI__mmle1f0qQz9hK5C2SzFm0XYMvDiZz-FdoPLu31VAfA&usqp=CAc'
    },
    {
        name: '과자',
        key: "a4sdf",
        image: 'http://img.daily.co.kr/@files/www.daily.co.kr/content_watermark/food/2018/20180314/a8e884b8a8c2dd75f6278a7dfc5c999b.jpg'
    },
    {
        name: '아이스크림',
        key: "as6df",
        image: 'http://img.danawa.com/prod_img/500000/150/777/img/7777150_1.jpg?shrink=500:500&_v=20190423163108'
    },
    {
        name: '라면',
        key: "as34df",
        image: 'http://www.costco.co.kr/medias/sys_master/images/h55/h6e/9868094472222.jpg'
    },
    {
        name: '음료',
        key: "asd75f",
        image: 'http://img.danawa.com/prod_img/500000/315/969/img/1969315_1.jpg?shrink=500:500&_v=20170309155800'
    },
    {
        name: '시리얼',
        key: "as234df",
        image: 'http://image.auction.co.kr/itemimage/18/2d/69/182d693e96.jpg'
    },
    {
        name: '국, 찌개',
        key: "asd62f",
        image: 'https://www.costco.co.kr/medias/sys_master/images/h22/ha8/9867971166238.jpg'
    },
    {
        name: '요리, 반찬',
        key: "asd62f",
        image: 'http://image.auction.co.kr/itemimage/da/97/61/da9761e01.jpg'
    },
    {
        name: '생활용품',
        key: "asd62f",
        image: 'http://image.auction.co.kr/itemimage/f3/4c/ea/f34cea206.jpg'
    },
    {
        name: '기타',
        key: "asd62f",
        image: 'http://image.auction.co.kr/itemimage/12/7a/59/127a5970e1.jpg'
    },
]


const BOXSIZE = (WIDTH - 48) / 3

const CategoryGrid = () => {
    const navigation = useNavigation();

    const emptyArray: string[] = []
    for (let i = 0; i < (((3 - (categorys.length % 3)) % 3)); i++) {
        emptyArray.push('');
    }


    const onCategory = (categoryKey: string) => {
        navigation.navigate('CategoryDetailScreen', { categoryKey })
    }

    const onStore = () => {
        navigation.navigate('ChangeStoreScreen');
    }


    const RenderItem = (item: any, index: number) =>
        <TouchableWithoutFeedback
            key={index}
            onPress={() => onCategory(item.key)}
            style={{ padding: 10, alignItems: 'center', justifyContent: 'center', width: BOXSIZE, height: BOXSIZE }}
        >
            <FastImage
                style={{ width: '100%', height: BOXSIZE - 50 }}
                source={{ uri: item.image }}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{ ...defaultFont, marginTop: 6 }}>{item.name}</Text>
        </TouchableWithoutFeedback>

    const RenderEmpty = (index: number) => <View key={index} style={{ width: BOXSIZE, height: BOXSIZE }} />

    return (
        <>
            <View style={{ width: WIDTH - 40, alignSelf: 'center', borderColor: '#dbdbdb', borderRadius: 16, borderWidth: 1, backgroundColor: 'white', marginTop: 20 }}>
                <TouchableWithoutFeedback
                    onPress={onStore}
                    style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}
                >
                    <View style={{ position: 'absolute', left: 0, width: 90, ...alignCenter }}>
                        <FastImage
                            style={{ height: 30, width: 50 }}
                            source={{ uri: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbdcEzt%2FbtqwO6vBvi1%2F4rXyAZ3e2s0QSbxFDuEh7k%2Fimg.jpg' }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }} >CU 부산 해운대점</Text>
                    <View style={{ position: 'absolute', right: 0, width: 90, ...alignCenter }}>
                        <Icon name='location-pin' size={22} />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ width: '100%', alignSelf: 'center', marginTop: 4, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6, justifyContent: 'center' }}>
                    {categorys.map((item, index) => RenderItem(item, index))}
                    {emptyArray.map((info, index) => RenderEmpty(index))}
                </View>
            </View>
        </>
    )


}

export default CategoryGrid

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import FastImage from 'react-native-fast-image'
import { WIDTH, defaultFont, alignCenter } from '../../components/style';
import useNavigation from '../../hooks/useNavigation';
import { TouchableWithoutFeedback, BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useShop from '../../hooks/useShop';
import { shopType2Logo } from '../../components/functions';
import { shopNameType } from '../../components/types';
import useCart from '../../hooks/useCart';
import useAddress from '../../hooks/useAddress';
import ShopIcon from '../../components/Icon/ShopIcon';


const categorys = [ //서버로
    {
        name: '밥, 도시락',
        key: "0",
        image: require('../../asset/CategoryIcon/0.png')
    },
    {
        name: '라면, 면',
        key: "1",
        image: require('../../asset/CategoryIcon/1.jpg')
    },
    {
        name: '국, 찌개',
        key: "2",
        image: require('../../asset/CategoryIcon/2.jpg')
    },
    {
        name: '요리, 반찬',
        key: "3",
        image: require('../../asset/CategoryIcon/3.jpg')
    },
    {
        name: '분식, 야식',
        key: "4",
        image: require('../../asset/CategoryIcon/4.jpg')
    },
    {
        name: '과일, 샐러드',
        key: "5",
        image: require('../../asset/CategoryIcon/5.jpg')
    },
    {
        name: '아이스크림',
        key: "6",
        image: require('../../asset/CategoryIcon/6.jpg')
    },
    {
        name: '생수, 음료',
        key: "7",
        image: require('../../asset/CategoryIcon/7.jpg')
    },
    {
        name: '빵, 시리얼',
        key: "8",
        image: require('../../asset/CategoryIcon/8.jpg')
    },
    {
        name: '과자',
        key: "9",
        image: require('../../asset/CategoryIcon/9.jpg')
    },
    {
        name: '생활용품',
        key: "10",
        image: require('../../asset/CategoryIcon/10.jpg')
    },
    {
        name: '커피플렉스',
        key: "11",
        image: require('../../asset/CategoryIcon/11.jpg')
    },
]


const BOXSIZE = (WIDTH - 48) / 3

const ShopList: shopNameType[] = ['CU', 'GS', 'SEVEN']




const CategoryGrid = () => {
    const navigation = useNavigation();
    const { shopType, onChange } = useShop()
    const { onRemoveAll } = useCart()
    const { presentAddress } = useAddress()

    const [shopChange, setShopChange] = useState(false)

    const emptyArray: string[] = []
    for (let i = 0; i < (((3 - (categorys.length % 3)) % 3)); i++) {
        emptyArray.push('');
    }


    const onCategory = (categoryKey: string, category: string) => {
        if (categoryKey == '11') {
            navigation.navigate('CoffeeFlexScreen')
            return
        }
        navigation.navigate('CategoryDetailScreen', { categoryKey, category })
    }

    const onShopPress = (type: shopNameType) => {
        if (type !== shopType) {
            onChange(type)
            onRemoveAll()
        }

        setShopChange(false)
    }


    const RenderItem = (item: any, index: number) =>
        <TouchableWithoutFeedback
            key={index}
            onPress={() => onCategory(item.key, item.name)}
            style={{ padding: 10, alignItems: 'center', justifyContent: 'center', width: BOXSIZE, height: BOXSIZE }}
        >
            <FastImage
                style={{ width: '100%', height: BOXSIZE - 50 }}
                source={item.image}
                resizeMode='contain'
            />
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 6 }}>{item.name}</Text>
        </TouchableWithoutFeedback>

    const RenderEmpty = (index: number) => <View key={index} style={{ width: BOXSIZE, height: BOXSIZE }} />

    return (
        <>
            <View style={{ width: WIDTH - 40, alignSelf: 'center', borderColor: '#dbdbdb', borderRadius: 12, borderWidth: 1, backgroundColor: 'white', marginTop: 20 }}>
                {
                    presentAddress !== null
                        ?
                        !shopChange && shopType !== null
                            ?
                            <>
                                <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{}}>
                                        <ShopIcon shop={shopType} resizeMode='contain' width={70} height={30} />
                                    </View>
                                    <View style={{ position: 'absolute', right: 0, width: 80, ...alignCenter }}>
                                        <BorderlessButton
                                            onPress={() => setShopChange(true)}
                                        >
                                            <Icon name='swap-horizontal' size={24} color='rgba(0, 0, 0, 0.5)' />
                                        </BorderlessButton>
                                    </View>
                                </View>

                                <View style={{ width: '100%', alignSelf: 'center', marginTop: 4, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6, justifyContent: 'center' }}>
                                    {categorys.map((item, index) => RenderItem(item, index))}
                                    {emptyArray.map((info, index) => RenderEmpty(index))}
                                </View>
                            </>
                            :
                            <>
                                {ShopList.length !== 0
                                    ?
                                    <>
                                        <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ ...defaultFont }} >{shopType === null ? '편의점을 선택해주세요' : '변경시 장바구니는 초기화됩니다'}</Text>
                                            {shopType !== null && <View style={{ position: 'absolute', right: 0, width: 80, ...alignCenter }}>
                                                <BorderlessButton
                                                    onPress={() => setShopChange(false)}
                                                >
                                                    <Icon name='close' size={24} color='rgba(0, 0, 0, 0.5)' />
                                                </BorderlessButton>
                                            </View>}
                                        </View>
                                        <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                                            {ShopList.map((item, index) =>
                                                <View
                                                    key={index}
                                                    style={{ flex: 1, ...alignCenter }}
                                                >
                                                    <TouchableWithoutFeedback
                                                        onPress={() => onShopPress(item)}
                                                    >
                                                        <ShopIcon shop={item} resizeMode='contain' width={50} height={30} />
                                                    </TouchableWithoutFeedback>
                                                </View>
                                            )}
                                        </View>
                                    </>
                                    :
                                    <>
                                        {/* 주변에 편의점이 없을때 */}
                                    </>
                                }
                            </>

                        :
                        <>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('AddressStack')}
                            >
                                <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ ...defaultFont }} >주소를 입력해주세요</Text>
                                </View>
                                <View style={{ height: 130, alignSelf: 'center', ...alignCenter, marginBottom: 10 }}>
                                    <FastImage
                                        style={{ height: 120, width: 120 }}
                                        source={require('../../asset/IconClear.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </>
                }

            </View>
        </>
    )


}

export default CategoryGrid

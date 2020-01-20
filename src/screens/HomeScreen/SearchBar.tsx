import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation'
import { WIDTH, shadow, defaultFont, cardHeight, titleFont, middleFont, defaultBorder } from '../../components/style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Fontisto'
import useShop from '../../hooks/useShop'
import useAddress from '../../hooks/useAddress'


const SearchBar = () => {
    const navigation = useNavigation();
    const { shopType } = useShop()
    const { presentAddress } = useAddress()

    const onSearch = () => {
        if (shopType == null) return;
        navigation.navigate('ItemSearchStack');
    }

    return (
        <TouchableWithoutFeedback
            onPress={onSearch}
            style={{
                marginHorizontal: 20, width: WIDTH - 40, height: cardHeight, backgroundColor: 'white', marginTop: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 12, ...defaultBorder
                , opacity: shopType !== null && presentAddress !== null ? 1 : 0
            }}
        >
            <Text style={{ ...defaultFont, color: 'rgba(0, 0, 0, 0.5)' }}>검색어를 입력해 주세요</Text>
            <Icon name='search' size={20} color='rgba(0, 0, 0, 0.5)' />
        </TouchableWithoutFeedback>
    )
}

export default SearchBar

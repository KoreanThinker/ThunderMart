import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation'
import { WIDTH, shadow, defaultFont, cardHeight, titleFont, middleFont } from '../../components/style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Fontisto'


const SearchBar = () => {
    const navigation = useNavigation();


    const onSearch = () => {
        navigation.navigate('ItemSearchScreen');
    }

    return (
        <TouchableWithoutFeedback
            onPress={onSearch}
            style={{ marginHorizontal: 10, width: WIDTH - 20, height: cardHeight, ...shadow, backgroundColor: 'white', marginTop: 30, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <Text style={{ ...middleFont }}>검색어를 입력해 주세요</Text>
            <Icon name='search' size={20} />
        </TouchableWithoutFeedback>
    )
}

export default SearchBar

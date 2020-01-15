import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation'
import { WIDTH, shadow } from '../../components/style'
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
            style={{ marginHorizontal: 10, width: WIDTH - 20, height: 60, ...shadow, backgroundColor: 'white', marginTop: 30, paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>검색어를 입력해 주세요</Text>
            <Icon name='search' size={24} />
        </TouchableWithoutFeedback>
    )
}

export default SearchBar

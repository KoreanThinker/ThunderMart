import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, TextInput, ListRenderItemInfo } from 'react-native'
import { cardHeight, borderBottom, alignCenter, defaultFont, titleFont, WIDTH } from '../../components/style'
import useNavigation from '../../hooks/useNavigation'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon2 from 'react-native-vector-icons/Fontisto'
import useItemSearch from '../../hooks/useItemSearch'
import { searchType } from '../../modules/ItemSearch'

const ItemSearchScreen = () => {
    const navigation = useNavigation()
    const { searchHistorys, onAppend, onRemove, onRemoveAll } = useItemSearch()
    const [text, setText] = useState('')
    const [seraching, setSearching] = useState(false)


    const onClose = () => {
        navigation.navigate('MainBottomTab')
    }

    const onSearch = () => {
        if (text.length == 0) return;
        onSearch2Text(text)
    }

    const onSearch2Text = (text: string) => {
        setSearching(true)
        setTimeout(() => {
            setText('')
            onAppend(text)
            setSearching(false)
        }, 250);
        navigation.navigate('ItemSearchedScreen', { text })

    }

    const RenderItem = (item: ListRenderItemInfo<searchType>) =>
        <View style={{ width: '100%', height: cardHeight, ...borderBottom, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableWithoutFeedback
                onPress={() => onSearch2Text(item.item.description)}
            >
                <Text style={{ ...defaultFont }}>{item.item.description}</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => onRemove(item.item.id)}
            >
                <Icon name='close' size={16} color='rgba(0, 0, 0, 0.5)' />
            </TouchableWithoutFeedback>
        </View>

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* 헤더 */}
            <View style={{ height: cardHeight, ...borderBottom, width: '100%', flexDirection: 'row' }}>
                <TouchableWithoutFeedback
                    onPress={onClose}
                    style={{ height: cardHeight, width: cardHeight, ...alignCenter }}
                >
                    <Icon name='arrowleft' size={24} color='#000' />
                </TouchableWithoutFeedback>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TextInput
                        style={{ ...titleFont }}
                        editable={!seraching}
                        value={text}
                        onChangeText={t => setText(t)}
                        placeholder='상품검색'
                        placeholderTextColor='rgba(0, 0, 0, 0.5)'
                        onSubmitEditing={onSearch}
                        autoFocus={true}
                        maxLength={14}
                    />
                </View>
                <TouchableWithoutFeedback
                    onPress={onSearch}
                    style={{ height: cardHeight, width: cardHeight, ...alignCenter }}
                >
                    <Icon2 name='search' size={18} color='#000' />
                </TouchableWithoutFeedback>
            </View>
            <FlatList
                data={searchHistorys}
                ListHeaderComponent={
                    <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 11, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)' }}>최근 검색어</Text>
                }
                renderItem={RenderItem}
                ListFooterComponent={
                    <TouchableWithoutFeedback
                        onPress={() => onRemoveAll()}
                    >
                        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 11, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)' }}>전체삭제</Text>
                    </TouchableWithoutFeedback>

                }
                ListEmptyComponent={
                    <View style={{ width: WIDTH - 40, height: 160, ...borderBottom, ...alignCenter, alignSelf: 'center' }}>
                        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 11, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)' }}>최근 검색어 내역이 없습니다</Text>
                    </View>
                }
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default ItemSearchScreen
export { default as ItemSearchedScreen } from './ItemSearchedScreen'
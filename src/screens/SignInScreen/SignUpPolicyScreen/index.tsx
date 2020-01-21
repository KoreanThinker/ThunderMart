import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import useNavigation from '../../../hooks/useNavigation'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import SubmitButton from '../../../components/Button/SubmitButton'
import { defaultFont } from '../../../components/style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MaterialToggle from '../../../components/Button/MaterialToggle'


type NavigationParams = {
    signIn: Function
}

type policyType = {
    name: string,
    url: string,
}
const data: policyType[] = [
    {
        name: '이용약관 동의',
        url: 'https://github.com/cnjon/react-native-pdf-view'
    },
    {
        name: '개인정보 처리방침',
        url: 'https://github.com/cnjon/react-native-pdf-view'
    }
]


const SignUpPolicyScreen = () => {
    const navigation = useNavigation<NavigationParams>()

    const [check, setCheck] = useState(data.map(() => false))

    const onSubmit = () => {
        navigation.state.params?.signIn()
        navigation.goBack()
    }

    const onPolicy = (item: policyType) => {
        navigation.navigate('PolicyDetailScreen', { name: item.name, url: item.url })
    }

    const RenderItem = (item: policyType, index: number) =>
        <View style={{ width: '100%', height: 36, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableWithoutFeedback
                onPress={() => onPolicy(item)}
            >
                <Text style={{ ...defaultFont, textDecorationLine: 'underline' }} >{item.name}</Text>
            </TouchableWithoutFeedback>

            <MaterialToggle
                value={check[index]}
                onPress={() => setCheck(check.map((item, index2) => index2 !== index ? item : !item))}
            />
        </View>

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader
                title='이용약관'
                goBack={() => navigation.goBack()}
            />
            <FlatList
                style={{ paddingTop: 40 }}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => 'policy' + index.toString()}
                renderItem={({ item, index }) => RenderItem(item, index)}
                ListFooterComponent={
                    <View style={{ width: '100%', height: 36, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                        <TouchableWithoutFeedback
                            onPress={() => { }}
                        >
                            <Text style={{ ...defaultFont }} >모두동의</Text>
                        </TouchableWithoutFeedback>

                        <MaterialToggle
                            value={!(check.indexOf(false) !== -1)}
                            onPress={() => setCheck(check.map(() => true))}
                        />
                    </View>
                }
            />
            <View style={{ position: 'absolute', bottom: 56, right: 0, left: 0 }}>
                <SubmitButton
                    onPress={onSubmit}
                    isOn={!(check.indexOf(false) !== -1)}
                    title='다음'
                />
            </View>
        </View>
    )
}

export default SignUpPolicyScreen

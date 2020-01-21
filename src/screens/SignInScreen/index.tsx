import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { alignCenter, defaultFont } from '../../components/style'
import ShadowBorderViewEmpty from '../../components/View/ShadowBorderViewEmpty'
import useNavigation from '../../hooks/useNavigation'
import { reset2HomeAndAddress } from '../../components/navigationResetActions'


const SignInScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {

    }, [])

    const onKakao = () => {
        navigation.navigate('SignUpPolicyScreen', { signIn: kakaoSignIn })
    }
    const onFacebook = () => {
        navigation.dispatch(reset2HomeAndAddress)
    }

    const kakaoSignIn = () => {
        console.log(11)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingBottom: 56 }}>
            <View style={{ flex: 1, ...alignCenter }}>
                <Image
                    style={{ width: 280, height: 280 }}
                    source={require('../../asset/IconClear.png')}
                />
            </View>
            <ShadowBorderViewEmpty
                onPress={onKakao}
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            >
                <Image
                    style={{ width: 40, height: 24, marginRight: 16 }}
                    source={require('../../asset/Logo/카카오말풍선로고.jpg')}
                    resizeMode='contain'
                />
                <Text style={{ ...defaultFont }} >카카오톡으로 시작하기</Text>
            </ShadowBorderViewEmpty>
            <ShadowBorderViewEmpty
                onPress={onFacebook}
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}
                marginTop={20}
            >
                <Image
                    style={{ width: 40, height: 24, marginRight: 16 }}
                    source={require('../../asset/Logo/페이스북F로고.png')}
                    resizeMode='contain'
                />
                <Text style={{ ...defaultFont }} >페이스북으로 시작하기</Text>
            </ShadowBorderViewEmpty>
        </View>
    )
}

export default SignInScreen
export { default as SignUpPolicyScreen } from './SignUpPolicyScreen'
export { default as PolicyDetailScreen } from './PolicyDetailScreen'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ToastAndroid } from 'react-native'
import { alignCenter, defaultFont } from '../../components/style'
import ShadowBorderViewEmpty from '../../components/View/ShadowBorderViewEmpty'
import useNavigation from '../../hooks/useNavigation'
import { reset2HomeAndAddress } from '../../components/navigationResetActions'
import KakaoLogins from '@react-native-seoul/kakao-login';
import SplashScreen from 'react-native-splash-screen'
import { toastMessage } from '../../components/functions'

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
    id: 'profile has not fetched',
    email: 'profile has not fetched',
    profile_image_url: '',
};

const SignInScreen = () => {
    const navigation = useNavigation()

    const [SignInLoading, setSignInLoading] = useState(false);

    const [token, setToken] = useState(TOKEN_EMPTY);
    const [profile, setProfile] = useState(PROFILE_EMPTY);


    const onKakao = () => {
        if (SignInLoading) return;
        navigation.navigate('SignUpPolicyScreen', { signIn: kakaoSignIn })
    }
    const onFacebook = () => {
        if (SignInLoading) return;
        navigation.navigate('SignUpPolicyScreen', { signIn: FacebookSignIn })
    }

    const kakaoSignIn = () => {
        setSignInLoading(true)

        KakaoLogins.login()
            .then(result => {
                setToken(result.accessToken);
                console.log(`Login Finished:${JSON.stringify(result)}`)
                setSignInLoading(false)
                SignInSuccess('kakao', result.accessToken)
            })
            .catch(err => {
                if (err.code === 'E_CANCELLED_OPERATION') {
                    console.log(`Login Cancelled:${err.message}`)
                } else {
                    console.log(`Login Failed:${err.code} ${err.message}`)
                    toastMessage('다시 시도해 주세요')
                }
                setSignInLoading(false)
            });
    }

    const FacebookSignIn = () => {

    }

    const SignInSuccess = (type: string, token: string) => {
        navigation.dispatch(reset2HomeAndAddress)
    }

    setTimeout(() => {
        SplashScreen.hide()
    }, 500);

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
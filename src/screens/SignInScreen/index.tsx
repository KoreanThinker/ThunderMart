import React, { useEffect, useState } from 'react'
import { View, Text, Image, ToastAndroid, Alert } from 'react-native'
import { alignCenter, defaultFont } from '../../components/style'
import ShadowBorderViewEmpty from '../../components/View/ShadowBorderViewEmpty'
import useNavigation from '../../hooks/useNavigation'
import { reset2HomeAndAddress } from '../../components/navigationResetActions'
import KakaoLogins from '@react-native-seoul/kakao-login';
import SplashScreen from 'react-native-splash-screen'
import { toastMessage } from '../../components/functions'
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { signInType } from '../../components/types'
import useAuth from '../../hooks/useAuth'

var secret = require('../../../secret.json')

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
    id: 'profile has not fetched',
    email: 'profile has not fetched',
    profile_image_url: '',
};

const SignInScreen = () => {
    const navigation = useNavigation()
    const { onSignIn } = useAuth()

    const [SignInLoading, setSignInLoading] = useState(false);

    const [token, setToken] = useState(TOKEN_EMPTY);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide()
        }, 500);
    }, [])


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
                    // errorSoluction()
                }
                Alert.alert('카톡로그인실패' + err.message)
                setSignInLoading(false)
            });
    }

    const FacebookSignIn = () => {
        setSignInLoading(true)
        console.log('start')
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    setSignInLoading(false)
                    console.log("Login cancelled");
                    AccessToken.getCurrentAccessToken().then(data => {
                        console.log(data)
                    })
                } else {
                    AccessToken.getCurrentAccessToken()
                        .then((data) => {
                            if (data === null) return;
                            SignInSuccess('facebook', data.accessToken.toString())
                        })
                        .catch((error) => {
                            // errorSoluction()
                            console.log("토큰에러: " + error);
                            Alert.alert('페이스북 토큰' + error.toString())
                        })

                }
            },
            function (error) {
                // errorSoluction()
                Alert.alert('페이스북 로그인실패' + error.toString())
                console.log("Login fail with error: " + error);
            }
        );
    }

    const SignInSuccess = async (type: signInType, token: string) => {
        console.log('로그인 : ' + type + ' : ' + token)
        console.log(secret.endPoint)
        // Alert.alert('1' + secret.endPoint)
        // try {
        const getLogin = await fetch(`${secret.endPoint}/users/login?user_token=${token}&provider=${type.toUpperCase()}`, {
            method: 'POST'
        })
        const res = await getLogin.json()
        // Alert.alert('2' + secret.endPoint + res.toString())
        console.log(res)
        if (res.res_code === 0) {
            onSignIn(type, token, res.session_id)
            navigation.dispatch(reset2HomeAndAddress)
        } else {
            // Alert.alert(secret.endPoint + res.toString())
            // Alert.alert('3' + secret.endPoint)
            errorSoluction()
        }
        // } catch (error) {
        //     console.log(error)

        // errorSoluction()
        // }
    }

    const errorSoluction = () => {
        toastMessage('다시 시도해 주세요')
        setSignInLoading(false)
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
            <Text style={{ position: 'absolute', bottom: 20, fontSize: 10, color: '#888' }} >dev-0.4</Text>
        </View>
    )
}

export default SignInScreen
export { default as SignUpPolicyScreen } from './SignUpPolicyScreen'
export { default as PolicyDetailScreen } from './PolicyDetailScreen'
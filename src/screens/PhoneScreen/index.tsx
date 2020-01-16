import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ToastAndroid } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import usePhone from '../../hooks/usePhone';
import { color1, WIDTH, shadow } from '../../components/style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import sendSMS from '../../components/sendSMS';
import LeftArrowHeader from '../../components/Header/LeftArrowHeader';


const PhoneScreen = () => {
    const navigation = useNavigation()
    const { number, onChange } = usePhone();

    const [phoneNum, setPhoneNum] = useState('');
    const [send, setSend] = useState(false);
    const [sendLoading, setSendLoading] = useState(false);

    const [userVertifyNum, setUserVertifyNum] = useState('');

    const [vertifyNum, setVertifyNum] = useState('81358135')

    const [time, setTime] = useState(300)


    useEffect(() => {
        if (!time) return

        const intervalId = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [time]);

    const onSubmit = () => {
        if (sendLoading) return;
        if (phoneNum.length < 10) return;
        // else if (phoneNum === number) {
        //     ToastAndroid.show('이미 등록된 번호입니다', ToastAndroid.SHORT);
        //     return;
        // }
        sendVertifyNum()
    }

    const sendVertifyNum = () => {
        setTime(300)
        const num = (Math.floor(Math.random() * (8999)) + 1000).toString();
        setVertifyNum(num);
        setSendLoading(true)
        sendSMS(phoneNum, `썬더마트 인증번호 [${num}]`)
            .then((res) => {
                ToastAndroid.show('전송완료', ToastAndroid.SHORT)
                setSend(true)
                setSendLoading(false);
            })
            .catch(e => {
                ToastAndroid.show('오류', ToastAndroid.SHORT)
                goBack()
            })
    }

    const onComplete = () => {
        if (vertifyNum !== userVertifyNum) return;
        if (time === 0) {
            ToastAndroid.show('시간만료', ToastAndroid.SHORT);
            return;
        }
        onChange(phoneNum);
        goBack();
    }
    const goBack = () => {
        navigation.navigate('MainBottomTab')
    }

    const onResend = () => {
        if (time > 240) {
            ToastAndroid.show('재전송은 1분이 지나야 가능합니다', ToastAndroid.SHORT);
            return;
        }
        sendVertifyNum()
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LeftArrowHeader title='휴대폰번호 변경' goBack={() => navigation.navigate('MainBottomTab')} />
            <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 30 }}>
                {
                    !send
                        ?
                        <>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>휴대폰번호를 입력해주세요 (-없이 입력)</Text>
                            <View style={{ width: WIDTH - 60, alignSelf: 'center', backgroundColor: 'white', height: 60, ...shadow, paddingHorizontal: 16, justifyContent: 'center', marginTop: 20 }}>
                                <TextInput
                                    placeholder={number ? number : '01012345678'}
                                    style={{ fontSize: 16, fontWeight: 'bold' }}
                                    maxLength={11}
                                    keyboardType='number-pad'
                                    value={phoneNum}
                                    onChangeText={t => {
                                        setPhoneNum(t.replace(/[^0-9]/g, ''))
                                    }}
                                />
                            </View>
                            <TouchableWithoutFeedback
                                onPress={onSubmit}
                                style={{ opacity: phoneNum.length < 10 ? 0.5 : 1, width: WIDTH - 60, alignSelf: 'center', height: 60, backgroundColor: color1, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >인증번호 받기</Text>
                            </TouchableWithoutFeedback>
                        </>
                        :
                        <>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>휴대폰번호를 입력해주세요</Text>
                            <View style={{ width: WIDTH - 60, alignSelf: 'center', backgroundColor: 'white', height: 60, ...shadow, paddingHorizontal: 16, alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    placeholder='4자리를 입력해주세요'
                                    style={{ fontSize: 16, fontWeight: 'bold' }}
                                    maxLength={4}
                                    keyboardType='number-pad'
                                    value={userVertifyNum}
                                    onChangeText={t => {
                                        setUserVertifyNum(t.replace(/[^0-9]/g, ''))
                                    }}

                                />
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Math.floor(time / 60)}:{time % 60 < 10 ? '0' + (time % 60).toString() : time % 60}</Text>
                            </View>
                            <TouchableWithoutFeedback
                                onPress={onComplete}
                                style={{ opacity: vertifyNum === userVertifyNum ? 1 : 0.5, width: WIDTH - 60, alignSelf: 'center', height: 60, backgroundColor: color1, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >완료</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={onResend}
                            >
                                <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 16, fontWeight: 'bold', opacity: 0.5, textDecorationLine: 'underline' }}>재전송</Text>
                            </TouchableWithoutFeedback>

                        </>
                }
            </View>
        </View>
    )
}

export default PhoneScreen

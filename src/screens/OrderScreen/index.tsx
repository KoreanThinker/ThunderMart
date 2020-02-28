import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import IMP from 'iamport-react-native';
import useNavigation from '../../hooks/useNavigation';
import { reset2OrderResultScreen } from '../../components/navigationResetActions'
const secret = require('../../../secret.json')



type orderScreenProps = {
    type: 'card' | 'phone',
    input: {
        name: string,
        address: string,
        price: number,
        number: number,
    }
}

const OrderScreen = () => {

    const navigation = useNavigation<orderScreenProps>()


    function callback(response: any) {
        console.log(response)
        navigation.dispatch(reset2OrderResultScreen)
    }

    const data = {
        pg: navigation.getParam('type') == 'card' ? 'danal_tpay' : 'danal',
        pay_method: navigation.getParam('type'),
        name: navigation.getParam('input').name,
        merchant_uid: `mid_${new Date().getTime()}`,
        amount: navigation.getParam('input').price.toString(),
        buyer_tel: navigation.getParam('input').number.toString(),
        buyer_addr: navigation.getParam('input').address,
        app_scheme: 'example',
        digital: navigation.getParam('type') == 'phone'
    };


    return (
        <IMP.Payment
            userCode={secret.iamport.userCode}    // 가맹점 식별코드
            loading={<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} ><Text>로딩중...</Text></View>}   // 웹뷰 로딩 컴포넌트
            data={data}             // 결제 데이터
            callback={callback}     // 결제 종료 후 콜백
        />
    );
}

export default OrderScreen


export { default as OrderResultScreen } from './OrderResultScreen'
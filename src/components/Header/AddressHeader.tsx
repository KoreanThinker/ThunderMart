import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import useAddress from '../../hooks/useAddress';
import style from '../style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AddressHeader = () => {
    const navigation = useNavigation();
    const { presentAddress } = useAddress();

    const onAddress = () => {
        navigation.navigate('AddressScreen');
    }

    return (
        <TouchableWithoutFeedback
            onPress={onAddress}
            style={{ width: style.WIDTH, height: style.headerHeight, backgroundColor: style.color1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50 }}
        >
            <Text style={{ ...style.titleFont }} numberOfLines={1}>
                {presentAddress !== null ? presentAddress?.contractionAddress : '주소를 입력해주세요'}
            </Text>
        </TouchableWithoutFeedback>
    )
}

export default AddressHeader

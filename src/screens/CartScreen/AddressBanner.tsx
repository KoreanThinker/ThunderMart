import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import useAddress from '../../hooks/useAddress';
import style, { headerHeight, titleFont } from '../../components/style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AddressBanner = () => {
    const navigation = useNavigation();
    const { presentAddress } = useAddress();

    const onAddress = () => {
        navigation.navigate('AddressScreen');
    }

    return (
        <TouchableWithoutFeedback
            onPress={onAddress}
            style={{ width: style.WIDTH, height: headerHeight, backgroundColor: style.color1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 }}
        >
            <Text style={{ ...titleFont, color: 'white', textAlign: 'center' }} numberOfLines={1}>
                {presentAddress !== null ? presentAddress?.fullAddress : '주소를 입력해주세요'}
            </Text>
        </TouchableWithoutFeedback>
    )
}

export default AddressBanner

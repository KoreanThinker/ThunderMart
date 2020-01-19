import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { WIDTH, cardHeight, shadowOpt, middleFont, titleFont, defaultFont } from '../style'
const { BoxShadow } = require('react-native-shadow')


type ShadowBorderViewProps = {
    value: string,
    onPress(): void,
    marginTop?: number
}

const ShadowBorderView: React.FunctionComponent<ShadowBorderViewProps> = ({ value, onPress, marginTop }) => {
    return (
        <BoxShadow setting={{
            width: WIDTH - 60,
            height: cardHeight,
            color: '#000',
            border: 10,
            radius: 16,
            opacity: 0.06,
            x: 0,
            y: 0,
            style: {
                marginTop: marginTop ? marginTop : 0
            }
        }}>
            <TouchableWithoutFeedback
                onPress={() => onPress()}
                style={{ width: WIDTH - 60, height: cardHeight, backgroundColor: 'white', paddingHorizontal: 16, justifyContent: 'center', borderRadius: 16 }}
            >
                <Text style={{ ...middleFont }}>{value}</Text>
            </TouchableWithoutFeedback>
        </BoxShadow>
    )
}

export default ShadowBorderView

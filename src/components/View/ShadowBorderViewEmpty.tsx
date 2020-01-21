import React from 'react'
import { View, Text, ViewProps } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { WIDTH, cardHeight, shadowOpt, middleFont, titleFont, defaultFont } from '../style'
const { BoxShadow } = require('react-native-shadow')


type ShadowBorderViewEmptyProps = {
    marginTop?: number,
    onPress(): void,
}

const ShadowBorderViewEmpty: React.FunctionComponent<ViewProps & ShadowBorderViewEmptyProps> = (props) => {
    return (
        <BoxShadow setting={{
            width: WIDTH - 60,
            height: cardHeight,
            color: '#000',
            border: 8,
            radius: 16,
            opacity: 0.04,
            x: 0,
            y: 0,
            style: {
                marginTop: props.marginTop ? props.marginTop : 0
            }
        }}>
            <TouchableWithoutFeedback
                onPress={() => props.onPress()}
                style={{ width: WIDTH - 60, height: cardHeight, backgroundColor: 'white', paddingHorizontal: 16, justifyContent: 'center', borderRadius: 16 }}
            >
                <View {...props} />
            </TouchableWithoutFeedback>
        </BoxShadow>
    )
}

export default ShadowBorderViewEmpty

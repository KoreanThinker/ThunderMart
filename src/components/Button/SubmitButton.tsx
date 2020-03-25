import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { WIDTH, cardHeight, color1, titleFont } from '../style'

type SubmitButtonProps = {
    isOn: boolean,
    onPress(): void,
    title: string
}

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = ({ isOn, onPress, title }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            style={{ opacity: isOn ? 1 : 0.5, width: WIDTH - 60, alignSelf: 'center', height: cardHeight, backgroundColor: color1, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
        >
            <Text style={{ ...titleFont }} >{title}</Text>
        </TouchableWithoutFeedback>
    )
}

export default SubmitButton

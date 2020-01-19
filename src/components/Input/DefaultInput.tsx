import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { cardHeight, shadow, WIDTH, defaultFont, shadowBox, alignCenter, shadowOpt } from '../style';
const { BoxShadow } = require('react-native-shadow')


type DefaultInputProps = {
    placeholder: string,
    value: string,
    onChange(t: string): void
}


const DefaultInput: React.FunctionComponent<DefaultInputProps> = ({ placeholder, value, onChange }) => {

    return (
        <BoxShadow setting={{
            width: WIDTH - 60, height: cardHeight, ...shadowOpt, style: {
                marginTop: 10
            }
        }}>
            <View
                style={{ width: WIDTH - 60, alignSelf: 'center', backgroundColor: 'white', ...shadowBox, paddingHorizontal: 16, justifyContent: 'center' }}
            >
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                    style={{ ...defaultFont }}
                    value={value}
                    onChangeText={t => {
                        onChange(t)
                    }}
                />
            </View>
        </BoxShadow>
    )
}

export default DefaultInput

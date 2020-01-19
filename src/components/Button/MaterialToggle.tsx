import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { alignCenter } from '../style'

type MaterialToggleProps = {
    value: boolean,
    onPress(): void
}

const MaterialToggle: React.FunctionComponent<MaterialToggleProps> = ({ value, onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                onPress()
            }}
            style={{ width: '100%', height: '100%', ...alignCenter }}
        >
            <Icon name={value ? 'check-box' : 'check-box-outline-blank'} size={20} />
        </TouchableWithoutFeedback>
    )
}

export default MaterialToggle

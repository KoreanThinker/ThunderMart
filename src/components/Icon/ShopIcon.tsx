import React from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { shopNameType } from '../types'

const CU = require(`../../asset/ShopIcon/CU.png`)
const GS = require(`../../asset/ShopIcon/GS.png`)
const SEVEN = require(`../../asset/ShopIcon/SEVEN.png`)

export const Shop2Icon = (shop: shopNameType): any => {
    switch (shop) {
        case "CU": return CU
        case "GS": return GS
        case "SEVEN": return SEVEN
        default: return CU
    }
}

type ShopIconProps = {
    shop: shopNameType,
    width?: number,
    height?: number,
    resizeMode: "contain" | "cover" | "stretch" | "center"
}

const ShopIcon: React.FC<ShopIconProps> = (props) => {
    return (
        <FastImage
            source={Shop2Icon(props.shop)}
            style={{ width: props.width, height: props.height }}
            resizeMode={props.resizeMode}
        />
    )
}

export default ShopIcon

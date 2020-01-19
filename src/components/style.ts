import { Dimensions, StyleSheet } from 'react-native'


export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const color1 = '#000'
export const hightLightBlue = '#0096CE';

export const headerHeight = 56
export const cardHeight = 56

const styles = StyleSheet.create({
    defaultFont: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    middleFont: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    titleFont: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    bigFont: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    borderBottom: {
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 0.5
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    shadowBox: {
        height: cardHeight,
        borderRadius: 16,
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    defaultBorder: {
        borderWidth: 1,
        borderColor: '#dbdbdb'
    }
})

export const defaultFont = styles.defaultFont;
export const titleFont = styles.titleFont;
export const bigFont = styles.bigFont;
export const middleFont = styles.middleFont;

export const borderBottom = styles.borderBottom;

export const shadow = styles.shadow;
export const shadowBox = styles.shadowBox;
export const alignCenter = styles.alignCenter;

export const shadowOpt = {
    color: "#000",
    border: 10,
    radius: 16,
    opacity: 0.04,
    x: 0,
    y: 0
}

export const defaultBorder = styles.defaultBorder;


export default {
    WIDTH,
    HEIGHT,
    color1,
    shadow,
    hightLightBlue,
    headerHeight,
    defaultFont,
    titleFont,
    bigFont,
    borderBottom,
    middleFont,
    cardHeight,
    shadowOpt
}


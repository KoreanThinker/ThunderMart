import { Dimensions, StyleSheet } from 'react-native'


export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const color1 = '#000'
export const hightLightBlue = '#0096CE';

const styles = StyleSheet.create({
    defaultFont: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleFont: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export const defaultFont = styles.defaultFont;
export const titleFont = styles.titleFont;

export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
}

export const headerHeight = 60

export default {
    WIDTH,
    HEIGHT,
    color1,
    shadow,
    hightLightBlue,
    headerHeight,
    defaultFont,
    titleFont
}


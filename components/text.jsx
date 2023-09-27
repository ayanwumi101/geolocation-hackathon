import { StyleSheet, Text } from "react-native";

export function TextRegular({children, style, ...props}) {
    return (
        <Text {...props} style={StyleSheet.compose(styles.regular, style)}>{children}</Text>
    )
}

export function TextMedium({children, style, ...props}) {
    return (
        <Text  {...props} style={StyleSheet.compose(styles.medium, style)}>{children}</Text>
    )
}

export function TextBold({children, style, ...props}) {
    return (
        <Text  {...props} style={StyleSheet.compose(styles.bold, style)}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    regular: {
        fontFamily: 'Prompt_400Regular',
        fontWeight: '400',
        fontSize: 14,
        color: 'black',
    },
    medium: {
        fontFamily: 'Prompt_500Medium',
        fontWeight: '500',
        fontSize: 14,
        color: 'black',
    },
    bold: {
        fontFamily: 'Prompt_700Bold',
        fontWeight: '700',
        fontSize: 14,
        color: 'black',
    }
})
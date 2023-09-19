import { StyleSheet, Text, TouchableOpacity } from "react-native"

export function SolidButton({ containerProps={}, textProps={}, children }) {
    let {['style']: containerStyle, ..._containerProps} = containerProps
    let {['style']: textStyle, ..._textProps} = textProps
    return (
        <TouchableOpacity style={StyleSheet.compose(styles.button, containerStyle)} {..._containerProps}>
            <Text style={StyleSheet.compose(styles.buttonText, textStyle)} {..._textProps}>{children}</Text>
        </TouchableOpacity>
    )
}
export function OutlineButton({ containerProps={}, textProps={}, children }) {
    let {['style']: containerStyle, ..._containerProps} = containerProps
    let {['style']: textStyle, ..._textProps} = textProps
    return (
        <TouchableOpacity style={StyleSheet.compose(styles.outlineButton, containerStyle)} {...containerProps}>
            <Text style={StyleSheet.compose(styles.outlineButtonText, textStyle)} {...textProps}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#19686A',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 4,
        flex: 1,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Prompt_400Regular',
    },
    outlineButton: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#19686A',
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 4,
        flex: 1,
    },
    outlineButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
})
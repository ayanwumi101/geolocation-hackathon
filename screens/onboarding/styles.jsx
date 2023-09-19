import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    column: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: '60%',
    },
    bgCover: { height: '100%' },
    skipButtonContainer: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#19686A',
        borderStyle: 'solid',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 5,
    },
    contentContainer: {
        padding: 20,
    },
    textContainer: {
        marginBottom: 15,
    },
    onboardingHeadingText: {
        fontSize: 23,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 18,
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 25,
        fontFamily: 'Prompt_400Regular',
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 10,
    },
    buttonsContainer: {
        marginBottom: 20,
    },
    skipButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
    // buttonText: {
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: '#fff',
    //     fontFamily: 'Prompt_400Regular',
    // },
    signUpTexts: {
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
    },
    hurry: {
        fontWeight: 'bold',
        fontFamily: 'Prompt_400Regular',
    },
    signUp: {
        color: '#19686A',
        fontWeight: 'bold',
        fontFamily: 'Prompt_400Regular',
    },
})


export default styles;
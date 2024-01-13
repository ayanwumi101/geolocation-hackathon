import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { StarRatingDisplay } from 'react-native-star-rating-widget'


const Comments = ({navigation}) => {

    return (
        <View>
            <View style={styles.rating_container}>
                <View>
                    <Text style={styles.rating_number}>4.6</Text>
                </View>
                <View style={styles.star}>
                    <StarRatingDisplay
                        rating={4.6}
                        starSize={27}
                        style={styles.star_rating}
                    />
                    <Text style={styles.raters}>53 People</Text>
                </View>
            </View>

            <View>
                <View style={styles.comment_heading}>
                    <Text style={styles.heading_text}>Users Comments</Text>
                </View>
                <View>
                    <Comment />
                </View>

                <View>
                    <TouchableOpacity>
                        <View style={styles.outline_btn_container}>
                            <Text style={styles.outline_btn_text}>SEE ALL COMMENTS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('feedback')}>
                        <View style={styles.btn_container}>
                            <Text style={styles.btn_text}>GIVE FEEDBACK</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Comments


const Comment = () => {
    return (
        <View style={styles.comment}>
            <View style={styles.avatar_container}>
                <Text style={styles.avatar}>A</Text>
            </View>
            <View style={styles.comment_container}>
                <Text style={styles.user}>Anonymous User</Text>
                <Text style={styles.text}>
                    Their service was amazing, they attended to me on time and their recommendation read more...
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    rating_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        marginBottom: 15,
    },
    rating_number: {
        fontSize: 30,
        color: '#19686A',
        fontFamily: 'Prompt_500Medium'
    },
    star: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    star_rating: {
        marginBottom: 6,
    },
    raters: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Prompt_400Regular',
        color: '#939094'
    },
    comment: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginBottom: 13,
    },
    avatar_container: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#A8EFF0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        fontSize: 24,
        fontFamily: 'Prompt_500Medium',
        color: '#19686A',
    },
    comment_heading: {
        marginBottom: 15,
    },
    comment_container: {
        width: '87%',
    },
    user: {
        fontSize: 14,
        fontFamily: 'Prompt_400Regular',
        marginBottom: 7,
        color: '#787579'
    },
    text: {
        lineHeight: 21,
        fontSize: 15,
        fontFamily: 'Prompt_400Regular',
    },
    heading_text: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
        color: '#787579'
    },
    outline_btn_container: {
        width: '100%',
        borderColor: '#19686A',
        paddingVertical: 15,
        borderRadius: 4,
        marginBottom: 18,
        borderWidth: 1,
    },
    btn_container: {
        width: '100%',
        backgroundColor: '#19686A',
        paddingVertical: 15,
        borderRadius: 4,
    },
    btn_text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
        fontSize: 16,
    },
    outline_btn_text: {
        color: '#19686A',
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
        fontSize: 16,
    },
})
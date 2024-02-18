import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Accordion = ({ data }) => {
    const title = Object.keys(data);
    const test = Object.entries(data);

    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((item, index) => {
                    return <AccordionItem key={index} title={item.question} content={item.answer} />
                })}
            </View>
        </ScrollView>
    );
};

export default Accordion;


export const AccordionItem = ({ title, content }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!isExpanded);
    };

    return (
        <View style={styles.accordion_container}>
            <TouchableOpacity onPress={toggleAccordion}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        {isExpanded ? (
                            <Ionicons name='chevron-up-circle' size={25} color='#19686A' />
                        ) : (
                            <Ionicons name='chevron-down-circle' size={25} color='#19686A' />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
            {isExpanded && (
                <View style={styles.content}>
                    <Text style={styles.content_text}>{content}</Text>
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingBottom: 30,
    },
    accordion_container: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    header: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: '#f1f1f1',
        marginBottom: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontFamily: 'Prompt_500Medium',
        color: '#19686A'
    },
    content: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#e0e0e0',
    },
    content_text: {
        fontFamily: 'Prompt_400Regular',
        lineHeight: 30,
        fontSize: 16,
        color: '#484649'
    }
});

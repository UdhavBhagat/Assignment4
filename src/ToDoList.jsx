import React from 'react';
import {
    ScrollView,
    Pressable,
    View,
    Text,
    StyleSheet,
} from 'react-native';

function ToDoList({ tasks }) {
    return (
        <ScrollView>
            {tasks.map((item, index) => (
                <Pressable key={index}>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>{item}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

export default ToDoList;

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
        color: 'black',
    },
});

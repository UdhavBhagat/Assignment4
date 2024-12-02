import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen() {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.text}>App Name: Incredible ToDoList App</Text>
                <Text style={styles.text}>Developer: Udhav Bhagat</Text>
                <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
            </View>
        </ MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },

    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
});
export default AboutScreen
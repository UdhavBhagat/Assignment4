import React from "react";
import { View, Text, StyleSheet } from 'react-native'


function Footer() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 My ToDoList App</Text>
      </View>
    );
  };

  export default Footer
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
    },
    footer: {
      backgroundColor: 'white',
      padding: 10,
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    footerText: {
      fontSize: 14,
      color: '#333',
    },
  });
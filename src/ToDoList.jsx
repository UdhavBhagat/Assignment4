import React from 'react'
import {
    ScrollView,
    Pressable,
    View,
    Text,
    StyleSheet,
} from 'react-native';

function ToDoList({ tasks }) {
    return(
        <ScrollView>
          {tasks.map((item) => {
            <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>Do laundry</Text>
            </View>
          </Pressable>
          })}
      </ScrollView>
    )
}

export default ToDoList

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
    },
});
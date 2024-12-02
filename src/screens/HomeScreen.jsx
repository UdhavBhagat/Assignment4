import React, { useState } from "react";

import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";
import MainLayout from "../layouts/MainLayout";


function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
      }
    return (

        <MainLayout>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        <ToDoForm addTask={addTask}/>
        <ToDoList tasks={tasks}/>
      </MainLayout>

    )
}

export default HomeScreen
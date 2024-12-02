/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  }
  return (
    <SafeAreaView>
      <ToDoForm addTask={addTask}/>
      <ToDoList tasks={tasks}/>
    </SafeAreaView>
  );
}

export default App;